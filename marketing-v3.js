/* BF Omni POS V3 real landing interactions. No private keys or customer data are stored here. */
(function(){
 'use strict';
 var root=document.getElementById('marketing');if(!root)return;
 var year=document.getElementById('v3-year');if(year)year.textContent=String(new Date().getFullYear());
 var nav=document.getElementById('v3-nav'),menuBtn=document.getElementById('v3-menu-btn');
 if(menuBtn&&nav){
  menuBtn.addEventListener('click',function(){
   var on=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(on));
   menuBtn.setAttribute('aria-label',on?'Close menu':'Open menu');
  });
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
   nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');
  });});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){
   nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');
  }});
 }
 var products=[
  {name:'Signature Burger',category:'Burgers',price:1790},
  {name:'Nasi Lemak',category:'Rice',price:1590},
  {name:'Crispy Chicken',category:'Chicken',price:1990},
  {name:'Fresh Bowl',category:'Healthy',price:1490},
  {name:'Coffee',category:'Drinks',price:850},
  {name:'Pasta',category:'Mains',price:2190}
 ];
 var qty=[1,1,0,0,1,0],cart=document.getElementById('v3-cart-items'),
 totalEl=document.getElementById('v3-cart-total'),countEl=document.getElementById('v3-cart-count'),
 foodGrid=document.getElementById('v3-product-grid'),tabs=document.getElementById('v3-product-tabs');
 function cash(n){return 'RM '+(n/100).toFixed(2)}
 function render(){
  if(!cart)return;
  cart.replaceChildren();var total=0,count=0;
  products.forEach(function(item,i){
   if(!qty[i])return;total+=item.price*qty[i];count+=qty[i];
   var row=document.createElement('div');
   var name=document.createElement('span');name.textContent=item.name;
   var small=document.createElement('small');small.textContent='x'+qty[i];name.appendChild(small);
   var aside=document.createElement('div'),amount=document.createElement('strong');
   amount.textContent=cash(item.price*qty[i]);
   var remove=document.createElement('button');remove.type='button';remove.setAttribute('aria-label','Remove one '+item.name);
   remove.innerHTML='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14"/></svg>';
   remove.addEventListener('click',function(){qty[i]=Math.max(0,qty[i]-1);render()});
   aside.append(amount,remove);row.append(name,aside);cart.appendChild(row);
  });
  if(count===0){var p=document.createElement('p');p.textContent='Tap a dish to try the sample POS.';p.style.cssText='font-size:9px;color:#b7a994;padding:8px 0';cart.appendChild(p)}
  if(countEl)countEl.textContent='Items: '+count;
  if(totalEl)totalEl.textContent=cash(total);
 }
 if(foodGrid)foodGrid.querySelectorAll('button[data-product]').forEach(function(btn){
  btn.addEventListener('click',function(){
   var i=Number(btn.getAttribute('data-product'));if(Number.isInteger(i)&&i>=0&&i<products.length){
    qty[i]=Math.min(20,qty[i]+1);render();
   }
  });
 });
 if(tabs&&foodGrid)tabs.querySelectorAll('button[data-tab]').forEach(function(btn){
  btn.addEventListener('click',function(){
   var value=btn.getAttribute('data-tab');
   tabs.querySelectorAll('button').forEach(function(el){el.classList.toggle('active',el===btn)});
   foodGrid.querySelectorAll('button[data-product]').forEach(function(el){
    el.hidden=value!=='All items'&&el.getAttribute('data-category')!==value;
   });
  });
 });
 render();

 var form=document.getElementById('v3-demo-form'),feedback=document.getElementById('v3-form-feedback');
 if(form&&feedback){
  var lastRequestKey=null,pending=false;
  form.addEventListener('input',function(){if(!pending)lastRequestKey=null});
  form.addEventListener('submit',async function(e){
   e.preventDefault();if(pending||!form.reportValidity())return;
   var data=new FormData(form);
   if(String(data.get('website')||'').trim()){feedback.textContent='Thank you.';return}
   if(data.get('consent')!=='on'){feedback.textContent='Please agree to the contact consent.';return}
   var button=form.querySelector('button[type="submit"]');
   if(!lastRequestKey)lastRequestKey=crypto.randomUUID();
   var payload={
    _name:String(data.get('name')||'').trim(),
    _email:String(data.get('email')||'').trim(),
    _phone:String(data.get('phone')||'').trim()||null,
    _business_type:String(data.get('type')||'restaurant'),
    _city:String(data.get('city')||'').trim()||null,
    _message:String(data.get('message')||'').trim()||null,
    _request_key:lastRequestKey,_consent:true
   };
   pending=true;feedback.textContent='Sending your demo request…';feedback.className='';
   if(button){button.disabled=true;button.style.opacity='.6'}
   try{
    var response=await fetch("https://pzfpvgidypitollxlcnd.supabase.co/rest/v1/rpc/bf_submit_demo_enquiry",{
     method:'POST',
     headers:{'Content-Type':'application/json','apikey':"sb_publishable_EKavpBsPo83Dw-szKe1j9w_yR8JLgjs"},
     body:JSON.stringify(payload)
    });
    var result=await response.json().catch(function(){return {}});
    if(!response.ok)throw new Error(result.message||'We could not submit the request at this time.');
    feedback.textContent='Request received! Reference: '+String(result.reference||'submitted')+'. Our team will review your enquiry; this is not a confirmed appointment.';
    feedback.className='v3-form-success';
    form.reset();lastRequestKey=null;
   }catch(error){
    feedback.textContent=error instanceof Error?error.message:'Please try again later.';
    feedback.className='v3-form-error';
   }finally{pending=false;if(button){button.disabled=false;button.style.opacity=''}}
  });
 }
 // Enhanced motion only when user has not requested reduced animations.
 (function(){
  var header=root.querySelector('.v3-header');
  var scheduled=false;
  function updateHeader(){if(header)header.classList.toggle('v3-header-scrolled',window.scrollY>22);}
  updateHeader();
  window.addEventListener('scroll',function(){
   if(!scheduled){scheduled=true;window.requestAnimationFrame(function(){updateHeader();scheduled=false;});}
  },{passive:true});
  var motionOK=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: no-preference)').matches);
  if(motionOK&&'IntersectionObserver' in window){
   var nodes=root.querySelectorAll('.v3-section-head,.v3-feature-card,.v3-insights-copy,.v3-analytics-device,.v3-price-card,.v3-type-row,.v3-demo-copy,.v3-demo-form');
   var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
     if(entry.isIntersecting){entry.target.classList.add('v3-in-view');observer.unobserve(entry.target);}
    });
   },{rootMargin:'0px 0px -40px 0px',threshold:.06});
   nodes.forEach(function(element,i){
    element.classList.add('v3-scroll-reveal');
    element.style.setProperty('--reveal-delay',String(i%3*75)+'ms');
    observer.observe(element);
   });
   root.classList.add('v3-motion-ready');
  }
  if(window.matchMedia&&window.matchMedia('(hover: hover) and (pointer: fine)').matches){
   root.querySelectorAll('.v3-feature-card').forEach(function(card){
    card.addEventListener('pointermove',function(ev){
     var bounds=card.getBoundingClientRect();
     card.style.setProperty('--spot-x',Math.round(ev.clientX-bounds.left)+'px');
     card.style.setProperty('--spot-y',Math.round(ev.clientY-bounds.top)+'px');
    },{passive:true});
   });
  }
 })();

})();
