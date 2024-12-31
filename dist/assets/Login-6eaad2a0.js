import{j as W,u as ge,a as be,b as we,c as ke,C as de,d as ue,s as ie,Q as me,L as _e,e as ye}from"./index-3f5be7ce.js";import{D as Ne}from"./DocumentTitle-097638f7.js";import{a as o,G as q,J as he}from"./antd-b3df3d09.js";import{S as Ee}from"./Spring-4c5e2a79.js";import{P as ee}from"./mui-1d26c97c.js";import{u as xe,C as Se}from"./index.esm-293b4506.js";import{a as je,U as Pe}from"./config-fc0c890a.js";function O(){return(O=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(e[h]=s[h])}return e}).apply(this,arguments)}function pe(e,c){(c==null||c>e.length)&&(c=e.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=e[s];return h}var ce=window;o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.client_id,N=e.className,v=e.redirect_uri,g=e.scope,k=g===void 0?"profile":g,S=e.isOnlyGetToken,_=S!==void 0&&S,I=e.scope_data,E=I===void 0?{profile:{essential:!0}}:I,j=e.response_type,P=j===void 0?"token":j,b=e.children,i=e.onReject,d=e.onResolve,l=e.onLoginStart,u=o.useRef(null),f=o.useState(!1),T=f[0],p=f[1];o.useEffect(function(){!T&&r()},[T]),o.useEffect(function(){return function(){u.current&&u.current.remove()}},[]);var x=o.useCallback(function(){return!!document.getElementById("amazon-login")},[]),m=o.useCallback(function(w,C,F,B,L){C===void 0&&(C="script");var R=w.createElement(C);R.id=F,R.src=B,R.async=!0,R.defer=!0;var U=document.getElementsByTagName("script")[0];u.current=R,U&&U.parentNode&&U.parentNode.insertBefore(R,U),R.onload=L},[]),a=o.useCallback(function(w){try{return fetch("https://api.amazon.com/user/profile",{headers:{Authorization:"Bearer "+w.access_token}}).then(function(C){return C.json()}).then(function(C){d({provider:"amazon",data:O({},C,w)})}).catch(function(C){i(C)}).finally(function(){}),Promise.resolve()}catch(C){return Promise.reject(C)}},[i,d]),n=o.useCallback(function(w){_?d({provider:"amazon",data:O({},w)}):a(w)},[a,d,_]),t=o.useCallback(function(w){i(w)},[i]),r=o.useCallback(function(){x()?p(!0):m(document,"script","amazon-login","https://assets.loginwithamazon.com/sdk/na/login1.js",function(){ce.amazon.Login.setClientId(h),p(!0)})},[x,h,m]),y=o.useCallback(function(){T&&(ce.amazon?(l&&l(),ce.amazon.Login.authorize({scope:k,scope_data:E,response_type:P,redirect_uri:v,state:s},function(w){w.error?t(w.error):n(w)})):(r(),i("Google SDK isn't loaded!")))},[r,k,s,i,E,T,t,l,v,P,n]);return q.createElement("div",{className:N,onClick:y},b)});var se=window;o.memo(function(e){var c=e.appId,s=e.scope,h=s===void 0?"email,public_profile":s,N=e.state,v=N===void 0||N,g=e.xfbml,k=g===void 0||g,S=e.cookie,_=S===void 0||S,I=e.version,E=I===void 0?"v2.7":I,j=e.language,P=j===void 0?"en_EN":j,b=e.auth_type,i=b===void 0?"":b,d=e.className,l=e.onLoginStart,u=e.onReject,f=e.onResolve,T=e.redirect_uri,p=e.fieldsProfile,x=p===void 0?"id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender":p,m=e.response_type,a=m===void 0?"code":m,n=e.return_scopes,t=n===void 0||n,r=e.isOnlyGetToken,y=r!==void 0&&r,w=e.children,C=o.useRef(null),F=o.useState(!1),B=F[0],L=F[1],R=o.useState(!1),U=R[0],D=R[1];o.useEffect(function(){!B&&Y()},[B]),o.useEffect(function(){return function(){C.current&&C.current.remove()}},[]);var z=o.useCallback(function(V,K){var M=V.createElement("script");M.id="facebook-jssdk",M.src="https://connect.facebook.net/en_EN/sdk.js";var A=V.getElementsByTagName("script")[0];A&&A.parentNode&&A.parentNode.insertBefore(M,A),K()},[]),Q=o.useCallback(function(){return!!document.getElementById("facebook-jssdk")},[]),H=o.useCallback(function(V,K){var M=window;M.fbAsyncInit=function(){M.FB&&M.FB.init(O({},V)),L(!0);var A=K.getElementById("fb-root");A||((A=K.createElement("div")).id="fb-root",K.body.appendChild(A)),C.current=A}},[]),oe=o.useCallback(function(V){se.FB.api("/me",{locale:P,fields:x},function(K){f({provider:"facebook",data:O({},V,K)})})},[x,P,f]),te=o.useCallback(function(V){console.log("🚀 ~ file: index.tsx:127 ~ response:",V),V.authResponse?y?f({provider:"facebook",data:O({},V.authResponse)}):oe(V.authResponse):u(V),D(!1)},[oe,y,u,f]),Y=o.useCallback(function(){Q()?L(!0):z(document,function(){H({appId:c,xfbml:k,version:E,state:v,cookie:_,redirect_uri:T,response_type:a},document)})},[v,c,k,_,E,H,T,a,z,Q]),Z=o.useCallback(function(){B&&!U&&(se.FB?(D(!0),l&&l(),se.FB.login(te,{scope:h,return_scopes:t,auth_type:i})):(Y(),u("Fb isn't loaded!"),D(!1)))},[Y,h,u,i,B,l,U,t,te]);return q.createElement("div",{className:d,onClick:Z},w)});var $="875c0462-6309-4ddf-9889-5227b1acc82c",re=window;o.memo(function(e){var c=e.client_id,s=e.scope,h=s===void 0?"https://www.googleapis.com/auth/userinfo.profile":s,N=e.prompt,v=N===void 0?"select_account":N,g=e.typeResponse,k=g===void 0?"accessToken":g,S=e.ux_mode,_=e.className,I=_===void 0?"":_,E=e.login_hint,j=E===void 0?"":E,P=e.access_type,b=P===void 0?"online":P,i=e.onLoginStart,d=e.onReject,l=e.onResolve,u=e.redirect_uri,f=u===void 0?"/":u,T=e.auto_select,p=T!==void 0&&T,x=e.isOnlyGetToken,m=x!==void 0&&x,a=e.cookie_policy,n=a===void 0?"single_host_origin":a,t=e.hosted_domain,r=t===void 0?"":t,y=e.discoveryDocs,w=y===void 0?"":y,C=e.children,F=e.fetch_basic_profile,B=F===void 0||F,L=o.useRef(null),R=o.useState(!1),U=R[0],D=R[1],z=o.useState(null),Q=z[0],H=z[1];o.useEffect(function(){!U&&K()},[U]),o.useEffect(function(){return function(){L.current&&L.current.remove()}},[]);var oe=o.useCallback(function(){return!!document.getElementById("google-login")},[]),te=o.useCallback(function(A,J,G,ne,ve){J===void 0&&(J="script");var X=A.createElement(J);X.id=G,X.src=ne,X.async=!0,X.defer=!0;var ae=document.getElementsByTagName("script")[0];L.current=X,ae&&ae.parentNode&&ae.parentNode.insertBefore(X,ae),X.onload=ve},[]),Y=o.useCallback(function(A){if(k==="accessToken"){var J=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$,Authorization:"Bearer "+A.access_token});fetch("https://cors.bridged.cc/https://www.googleapis.com/oauth2/v3/userinfo?alt=json",{method:"GET",headers:J}).then(function(G){return G.json()}).then(function(G){var ne=O({},A,G);l({provider:"google",data:ne})}).catch(function(G){d(G)})}else fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+A.credential,{method:"GET"}).then(function(G){return G.json()}).then(function(G){var ne=O({},A,G);l({provider:"google",data:ne})}).catch(function(G){d(G)})},[k,d,l]),Z=o.useCallback(function(A){A&&b==="offline"||m?l({provider:"google",data:A}):Y(A)},[b,m,Y,l]),V=o.useCallback(function(A){d({provider:"google",data:A})},[d]),K=o.useCallback(function(){oe()?D(!0):te(document,"script","google-login","https://accounts.google.com/gsi/client",function(){var A={client_id:c,ux_mode:S},J=null;if(k==="idToken")re.google.accounts.id.initialize(O({},A,{auto_select:p,prompt:"select_account",login_uri:f,callback:Z,native_callback:Z,error_callback:V}));else{var G=O({},A,{scope:h,prompt:v,login_hint:j,access_type:b,hosted_domain:r,redirect_uri:f,cookie_policy:n,discoveryDocs:w,immediate:!0,fetch_basic_profile:B,callback:Z,error_callback:V});J=b==="offline"?re.google.accounts.oauth2.initCodeClient(G):re.google.accounts.oauth2.initTokenClient(G)}J&&H(J),D(!0)})},[h,v,S,c,j,p,b,f,k,w,n,r,Z,V,B,te,oe]),M=o.useCallback(function(){U&&(re.google?(i&&i(),Q?b==="offline"?Q.requestCode():Q.requestAccessToken():re.google.accounts.id.prompt()):(K(),d("Google SDK isn't loaded!")))},[b,Q,U,K,i,d]);return q.createElement("div",{className:I,onClick:M},C)});o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.scope,N=h===void 0?"repo,gist":h,v=e.client_id,g=e.client_secret,k=e.className,S=k===void 0?"":k,_=e.redirect_uri,I=e.allow_signup,E=I!==void 0&&I,j=e.isOnlyGetToken,P=j!==void 0&&j,b=e.isOnlyGetCode,i=b!==void 0&&b,d=e.children,l=e.onReject,u=e.onResolve,f=e.onLoginStart;o.useEffect(function(){var n=new URL(window.location.href),t=n.searchParams.get("code"),r=n.searchParams.get("state");r!=null&&r.includes("_github")&&t&&(localStorage.setItem("github",t),window.close())},[]);var T=o.useCallback(function(n){fetch("https://cors.bridged.cc/https://api.github.com//user",{method:"GET",headers:{Authorization:"token "+n.access_token,"x-cors-grida-api-key":$}}).then(function(t){return t.json()}).then(function(t){u({provider:"github",data:O({},t,n)})}).catch(function(t){l(t)})},[l,u]),p=o.useCallback(function(n){if(i)u({provider:"github",data:{code:n}});else{var t={code:n,state:s,redirect_uri:_,client_id:v,client_secret:g},r=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$});fetch("https://cors.bridged.cc/https://github.com/login/oauth/access_token",{method:"POST",headers:r,body:new URLSearchParams(t)}).then(function(y){return y.text()}).then(function(y){for(var w,C={},F=function(L,R){var U;if(typeof Symbol>"u"||L[Symbol.iterator]==null){if(Array.isArray(L)||(U=function(z,Q){if(z){if(typeof z=="string")return pe(z,void 0);var H=Object.prototype.toString.call(z).slice(8,-1);return H==="Object"&&z.constructor&&(H=z.constructor.name),H==="Map"||H==="Set"?Array.from(z):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?pe(z,void 0):void 0}}(L))){U&&(L=U);var D=0;return function(){return D>=L.length?{done:!0}:{done:!1,value:L[D++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(U=L[Symbol.iterator]()).next.bind(U)}(new URLSearchParams(y));!(w=F()).done;){var B=w.value;C[B[0]]=B[1]}C.access_token?P?u({provider:"github",data:C}):T(C):l("no data")}).catch(function(y){l(y)})}},[s,l,T,u,v,_,g,i,P]),x=o.useCallback(function(n){var t=n.type,r=n.code,y=n.provider;try{return Promise.resolve(t==="code"&&y==="github"&&r&&p(r))}catch(w){return Promise.reject(w)}},[p]),m=o.useCallback(function(){window.removeEventListener("storage",m,!1);var n=localStorage.getItem("github");n&&(x({provider:"github",type:"code",code:n}),localStorage.removeItem("github"))},[x]),a=o.useCallback(function(){f&&f(),window.addEventListener("storage",m,!1);var n=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://github.com/login/oauth/authorize?client_id="+v+"&scope="+N+"&state="+s+"_github&redirect_uri="+_+"&allow_signup="+E,"Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+n)},[N,s,v,_,E,f,m]);return q.createElement("div",{className:S,onClick:a},d)});o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.client_id,N=e.client_secret,v=e.className,g=e.redirect_uri,k=e.fields,S=k===void 0?"id,username,account_type,media_count":k,_=e.scope,I=_===void 0?"user_profile,user_media":_,E=e.response_type,j=E===void 0?"code":E,P=e.isOnlyGetCode,b=P!==void 0&&P,i=e.isOnlyGetToken,d=i!==void 0&&i,l=e.children,u=e.onReject,f=e.onResolve,T=e.onLoginStart;o.useEffect(function(){var t=new URL(window.location.href),r=t.searchParams.get("code"),y=t.searchParams.get("state");y!=null&&y.includes("_instagram")&&r&&(localStorage.setItem("instagram",r),window.close())},[]);var p=o.useCallback(function(t){fetch("https://cors.bridged.cc/https://graph.instagram.com//me?fields="+S+"&access_token="+t.access_token,{method:"GET",headers:{"x-cors-grida-api-key":$}}).then(function(r){return r.json()}).then(function(r){f({provider:"instagram",data:O({},r,t)})}).catch(function(r){u(r)})},[S,u,f]),x=o.useCallback(function(t){if(b)f({provider:"instagram",data:{code:t}});else{var r={grant_type:"authorization_code",code:t,redirect_uri:g,client_id:h,client_secret:N},y=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$});fetch("https://cors.bridged.cc/https://api.instagram.com/oauth/access_token",{method:"POST",headers:y,body:new URLSearchParams(r)}).then(function(w){return w.json()}).then(function(w){w.access_token?d?f({provider:"instagram",data:w}):p(w):u("no data")}).catch(function(w){u(w)}).finally(function(){})}},[u,f,p,h,g,N,b,d]),m=o.useCallback(function(t){var r=t.type,y=t.code,w=t.provider;try{return Promise.resolve(r==="code"&&w==="instagram"&&y&&x(y))}catch(C){return Promise.reject(C)}},[x]),a=o.useCallback(function(){window.removeEventListener("storage",a,!1);var t=localStorage.getItem("instagram");t&&(m({provider:"instagram",type:"code",code:t}),localStorage.removeItem("instagram"))},[m]),n=o.useCallback(function(){T&&T(),window.addEventListener("storage",a,!1);var t=window.screen.width/2-225,r=window.screen.height/2-365;window.open("https://api.instagram.com/oauth/authorize?response_type="+j+"&client_id="+h+"&scope="+I+"&state="+s+"_instagram&redirect_uri="+g,"Instagram","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+r+", left="+t)},[I,s,h,g,T,j,a]);return q.createElement("div",{className:v,onClick:n},l)});o.memo(function(e){var c=e.tenant,s=c===void 0?"common":c,h=e.state,N=h===void 0?"":h,v=e.client_id,g=e.className,k=e.redirect_uri,S=e.scope,_=S===void 0?"profile openid email":S,I=e.response_type,E=I===void 0?"code":I,j=e.response_mode,P=j===void 0?"query":j,b=e.children,i=e.code_challenge,d=i===void 0?"19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9":i,l=e.code_challenge_method,u=l===void 0?"plain":l,f=e.prompt,T=f===void 0?"select_account":f,p=e.isOnlyGetCode,x=p!==void 0&&p,m=e.isOnlyGetToken,a=m!==void 0&&m,n=e.onLoginStart,t=e.onReject,r=e.onResolve;o.useEffect(function(){var L=new URL(window.location.href),R=L.searchParams.get("code"),U=L.searchParams.get("state");U!=null&&U.includes("_microsoft")&&R&&(localStorage.setItem("microsoft",R),window.close())},[]);var y=o.useCallback(function(L){fetch("https://graph.microsoft.com/v1.0/me",{method:"GET",headers:{Authorization:"Bearer "+L.access_token}}).then(function(R){return R.json()}).then(function(R){r({provider:"microsoft",data:O({},R,L)})}).catch(function(R){t(R)})},[t,r]),w=o.useCallback(function(L){if(x)r({provider:"microsoft",data:{code:L}});else{var R={code:L,scope:_,client_id:v,redirect_uri:k,code_verifier:d,grant_type:"authorization_code"},U=new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"});fetch("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/token",{method:"POST",headers:U,body:new URLSearchParams(R)}).then(function(D){return D.json()}).then(function(D){D.access_token?a?r({provider:"microsoft",data:D}):y(D):t("no data")}).catch(function(D){t(D)})}},[_,s,t,y,v,r,k,d,x,a]),C=o.useCallback(function(L){var R=L.type,U=L.code,D=L.provider;try{return Promise.resolve(R==="code"&&D==="microsoft"&&U&&w(U))}catch(z){return Promise.reject(z)}},[w]),F=o.useCallback(function(){window.removeEventListener("storage",F,!1);var L=localStorage.getItem("microsoft");L&&(C({provider:"microsoft",type:"code",code:L}),localStorage.removeItem("microsoft"))},[C]),B=o.useCallback(function(){n&&n(),window.addEventListener("storage",F,!1);var L=window.screen.width/2-225,R=window.screen.height/2-365;window.open("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/authorize?client_id="+v+`
        &response_type=`+E+`
        &redirect_uri=`+k+`
        &response_mode=`+P+`
        &scope=`+_+`
        &state=`+N+`_microsoft
        &prompt=`+T+`
        &code_challenge=`+d+`
        &code_challenge_method=`+u,"Microsoft","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+R+", left="+L)},[_,N,T,s,v,n,k,P,E,d,F,u]);return q.createElement("div",{className:g,onClick:B},b)});o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.scope,N=h===void 0?"r_liteprofile":h,v=e.client_id,g=e.client_secret,k=e.className,S=k===void 0?"":k,_=e.redirect_uri,I=e.response_type,E=I===void 0?"code":I,j=e.isOnlyGetCode,P=j!==void 0&&j,b=e.isOnlyGetToken,i=b!==void 0&&b,d=e.children,l=e.onLoginStart,u=e.onReject,f=e.onResolve;o.useEffect(function(){var n=new URL(window.location.href),t=n.searchParams.get("code"),r=n.searchParams.get("state");r!=null&&r.includes("_linkedin")&&t&&(localStorage.setItem("linkedin",t),window.close())},[]);var T=o.useCallback(function(n){fetch("https://api.allorigins.win/get?url="+encodeURIComponent("https://api.linkedin.com/v2/me?oauth2_access_token="+n.access_token+"&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"),{method:"GET"}).then(function(t){return t.json()}).then(function(t){var r=O({},n);if(t.contents){var y=JSON.parse(t.contents);typeof n=="object"&&Object.entries(y).map(function(w){r[w[0]]=w[1]})}f({provider:"linkedin",data:r})}).catch(function(t){u(t)})},[u,f]),p=o.useCallback(function(n){if(P)f({provider:"linkedin",data:{code:n}});else{var t={code:n,grant_type:"authorization_code",redirect_uri:_,client_id:v,client_secret:g},r=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$});fetch("https://cors.bridged.cc/https://www.linkedin.com/oauth/v2/accessToken",{method:"POST",headers:r,body:new URLSearchParams(t)}).then(function(y){return y.json()}).then(function(y){i?f({provider:"linkedin",data:y}):T(y)}).catch(function(y){u(y)})}},[u,f,v,T,_,g,P,i]),x=o.useCallback(function(n){var t=n.type,r=n.code,y=n.provider;try{return Promise.resolve(t==="code"&&y==="linkedin"&&r&&p(r))}catch(w){return Promise.reject(w)}},[p]),m=o.useCallback(function(){window.removeEventListener("storage",m,!1);var n=localStorage.getItem("linkedin");n&&(x({provider:"linkedin",type:"code",code:n}),localStorage.removeItem("linkedin"))},[x]),a=o.useCallback(function(){l&&l(),window.addEventListener("storage",m,!1);var n=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.linkedin.com/oauth/v2/authorization?response_type="+E+"&client_id="+v+"&scope="+N+"&state="+s+"_linkedin&redirect_uri="+_,"Linkedin","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+n)},[l,m,E,v,N,s,_]);return q.createElement("div",{className:S,onClick:a},d)});o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.scope,N=h===void 0?"boards:read,pins:read,user_accounts:read":h,v=e.client_id,g=e.client_secret,k=e.className,S=k===void 0?"":k,_=e.redirect_uri,I=e.isOnlyGetCode,E=I!==void 0&&I,j=e.isOnlyGetToken,P=j!==void 0&&j,b=e.children,i=e.onLoginStart,d=e.onReject,l=e.onResolve;o.useEffect(function(){var m=new URL(window.location.href),a=m.searchParams.get("code"),n=m.searchParams.get("state");n!=null&&n.includes("_pinterest")&&a&&(localStorage.setItem("pinterest",a),window.close())},[]);var u=o.useCallback(function(m){fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/user_account",{method:"GET",headers:{Authorization:"Bearer "+m.access_token,"x-cors-grida-api-key":$}}).then(function(a){return a.json()}).then(function(a){l({provider:"pinterest",data:O({},m,a)})}).catch(function(a){return d(a)})},[d,l]),f=o.useCallback(function(m){try{var a=function(){if(!E){var n={code:m,redirect_uri:_,grant_type:"authorization_code"},t=[];for(var r in n){var y=encodeURIComponent(r),w=encodeURIComponent(n[r]);t.push(y+"="+w)}return t=t.join("&"),Promise.resolve(fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/oauth/token",{method:"POST",headers:{Authorization:"Basic "+btoa(v+":"+g),"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$},body:t}).then(function(C){return C.json()}).catch(function(C){return d(C)})).then(function(C){C.access_token&&(P?l({provider:"pinterest",data:C}):u(C))})}l({provider:"pinterest",data:{code:m}})}();return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},[d,v,u,l,_,g,E,P]),T=o.useCallback(function(m){var a=m.type,n=m.code,t=m.provider;try{return Promise.resolve(a==="code"&&t==="pinterest"&&n&&f(n))}catch(r){return Promise.reject(r)}},[f]),p=o.useCallback(function(){window.removeEventListener("storage",p,!1);var m=localStorage.getItem("pinterest");m&&(T({provider:"pinterest",type:"code",code:m}),localStorage.removeItem("pinterest"))},[T]),x=o.useCallback(function(){i&&i(),window.addEventListener("storage",p,!1);var m=window.screen.width/2-225,a=window.screen.height/2-365;window.open("https://www.pinterest.com/oauth/?client_id="+v+"&scope="+N+"&state="+s+"_pinterest&redirect_uri="+_+"&response_type=code","Pinterest","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+a+", left="+m)},[N,s,v,_,i,p]);return q.createElement("div",{className:S,onClick:x},b)});o.memo(function(e){var c=e.client_id,s=e.className,h=s===void 0?"":s,N=e.redirect_uri,v=e.children,g=e.fields,k=g===void 0?"created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld":g,S=e.state,_=S===void 0?"state":S,I=e.scope,E=I===void 0?"users.read%20tweet.read":I,j=e.isOnlyGetCode,P=j!==void 0&&j,b=e.isOnlyGetToken,i=b!==void 0&&b,d=e.onLoginStart,l=e.onReject,u=e.onResolve;o.useEffect(function(){var a=new URL(window.location.href),n=a.searchParams.get("code");a.searchParams.get("state")&&n&&(localStorage.setItem("twitter",""+n),window.close())},[]);var f=o.useCallback(function(a){fetch("https://cors.bridged.cc/https://api.twitter.com/2/users/me?user.fields="+k,{method:"GET",headers:{Authorization:"Bearer "+a.access_token,"x-cors-grida-api-key":$}}).then(function(n){return n.json()}).then(function(n){u({provider:"twitter",data:O({},a,n.data)})}).catch(function(n){return l(n)})},[k,l,u]),T=o.useCallback(function(a){try{var n=function(){if(!P){var t=new URLSearchParams({code:a,redirect_uri:N,client_id:c,grant_type:"authorization_code",code_verifier:"challenge"});return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/2/oauth2/token",{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":$}}).then(function(r){return r.json()}).catch(function(r){return l(r)})).then(function(r){r.access_token&&(i?u({provider:"twitter",data:r}):f(r))})}u({provider:"twitter",data:{code:a}})}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},[l,f,u,c,N,P,i]),p=o.useCallback(function(a){var n=a.type,t=a.code,r=a.provider;try{return Promise.resolve(n==="code"&&r==="twitter"&&t&&T(t))}catch(y){return Promise.reject(y)}},[T]),x=o.useCallback(function(){window.removeEventListener("storage",x,!1);var a=localStorage.getItem("twitter");a&&(p({provider:"twitter",type:"code",code:a}),localStorage.removeItem("twitter"))},[p]),m=o.useCallback(function(){try{d&&d(),window.addEventListener("storage",x,!1);var a=window.screen.width/2-225,n=window.screen.height/2-365;return window.open("https://twitter.com/i/oauth2/authorize?response_type=code&client_id="+c+"&redirect_uri="+N+"&scope="+E+"&state="+_+"&code_challenge=challenge&code_challenge_method=plain","twitter","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+n+", left="+a),Promise.resolve()}catch(t){return Promise.reject(t)}},[E,_,c,d,N,x]);return q.createElement("div",{className:h,onClick:m},v)});typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var le=window;o.memo(function(e){var c=e.client_id,s=e.scope,h=s===void 0?"name email":s,N=e.className,v=N===void 0?"":N,g=e.onLoginStart,k=e.onReject,S=e.onResolve,_=e.redirect_uri,I=_===void 0?"/":_,E=e.children,j=o.useRef(null),P=o.useState(!1),b=P[0],i=P[1];o.useEffect(function(){!b&&f()},[b]),o.useEffect(function(){return function(){j.current&&j.current.remove()}},[]);var d=o.useCallback(function(){return!!document.getElementById("apple-login")},[]),l=o.useCallback(function(p,x,m,a,n){x===void 0&&(x="script");var t=p.createElement(x);t.id=m,t.src=a,t.async=!0,t.defer=!0;var r=document.getElementsByTagName("script")[0];j.current=t,r&&r.parentNode&&r.parentNode.insertBefore(t,r),t.onload=n},[]),u=o.useCallback(function(p){S({provider:"apple",data:p})},[S]),f=o.useCallback(function(){d()?i(!0):l(document,"script","apple-login","https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",function(){le.AppleID.auth.init({clientId:c,scope:h,redirectURI:I,state:"origin:web",usePopup:!0}),i(!0)})},[h,c,I,l,d]),T=o.useCallback(function(){try{if(!b)return Promise.resolve();var p=function(){if(le.AppleID){g&&g();var x=function(m,a){try{var n=Promise.resolve(le.AppleID.auth.signIn()).then(function(t){u(t)})}catch(t){return a(t)}return n&&n.then?n.then(void 0,a):n}(0,function(m){k({err:m})});if(x&&x.then)return x.then(function(){})}else f(),k("Apple SDK isn't loaded!")}();return Promise.resolve(p&&p.then?p.then(function(){}):void 0)}catch(x){return Promise.reject(x)}},[u,b,f,g,k]);return q.createElement("div",{className:v,onClick:T},E)});o.memo(function(e){var c=e.state,s=c===void 0?"":c,h=e.scope,N=h===void 0?"user.info.basic":h,v=e.client_key,g=e.className,k=g===void 0?"":g,S=e.redirect_uri,_=e.children,I=e.onResolve,E=e.onLoginStart;o.useEffect(function(){var i=new URL(window.location.href),d=i.searchParams.get("code"),l=i.searchParams.get("state");l!=null&&l.includes("_tiktok")&&d&&(localStorage.setItem("tiktok",d),window.close())},[]);var j=o.useCallback(function(i){var d=i.type,l=i.code,u=i.provider;try{return Promise.resolve(d==="code"&&u==="tiktok"&&l&&I({provider:"tiktok",data:{code:l}}))}catch(f){return Promise.reject(f)}},[I]),P=o.useCallback(function(){window.removeEventListener("storage",P,!1);var i=localStorage.getItem("tiktok");i&&(j({provider:"tiktok",type:"code",code:i}),localStorage.removeItem("instagram"))},[j]),b=o.useCallback(function(){E&&E(),window.addEventListener("storage",P,!1);var i=window.screen.width/2-225,d=window.screen.height/2-365;window.open("https://www.tiktok.com/auth/authorize?client_key="+v+"&scope="+N+"&state="+s+"_tiktok&redirect_uri="+S+"&response_type=code","Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+d+", left="+i)},[N,s,v,S,E,P]);return q.createElement("div",{className:k,onClick:b},_)});const fe=({innerRef:e,id:c,label:s="Password",isInvalid:h,...N})=>{const[v,g]=o.useState(!1),k=S=>{S.preventDefault(),g(!v)};return o.useEffect(()=>{N.value===""&&g(!1)},[N.value]),W.jsxDEV("div",{className:"field-wrapper",children:[W.jsxDEV("label",{className:"field-label",htmlFor:c,children:s},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:23,columnNumber:13},globalThis),W.jsxDEV("div",{className:"relative",children:[W.jsxDEV("input",{className:he("field-input !pr-10",{"field-input--error":h}),id:c,type:v?"text":"password",ref:e,...N},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:27,columnNumber:17},globalThis),W.jsxDEV("button",{className:"field-btn",onClick:k,"aria-label":"Toggle password visibility",children:W.jsxDEV("i",{className:`icon icon-eye${v?"-slash-regular":"-regular"}`},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:31,columnNumber:21},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:30,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:26,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/PasswordInput.jsx",lineNumber:22,columnNumber:10},globalThis)};fe.propTypes={innerRef:ee.func,id:ee.string.isRequired,label:ee.string,isInvalid:ee.oneOfType([ee.bool,ee.object])};const Ce="/assets/login-33fdac8a.webp",Te=async(e,c)=>{try{return await je.post(`${Pe}/signin`,{email:e,password:c})}catch{throw new Error("Failed to sign in")}},Le=()=>{const{width:e}=ge(),[c,s]=o.useState(!1),[h,N]=o.useState(!1),v=3,g=be(),k=we(),S=ke(),{register:_,handleSubmit:I,formState:{errors:E},control:j}=xe({defaultValues:{email:"",password:""}});o.useEffect(()=>{const i=new URLSearchParams(k.search).get("access_token");i?(g(de(!0)),g(ue(i)),ie("token",i,v),ie("user_login",i),S("/")):c&&(me.error("Không thể đăng nhập bằng Google!"),s(!1))},[k.search,c,g,S]);const P=async b=>{var i,d,l,u,f,T;N(!0);try{const p=await Te(b.email,b.password);g(de(!0)),g(ue((d=(i=p==null?void 0:p.data)==null?void 0:i.metadata)==null?void 0:d.tokens.accessToken)),ie("token",(u=(l=p==null?void 0:p.data)==null?void 0:l.metadata)==null?void 0:u.tokens.accessToken,v),ie("user_login",(T=(f=p==null?void 0:p.data)==null?void 0:f.metadata)==null?void 0:T.tokens.accessToken),S("/")}catch{me.error("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.")}finally{N(!1)}};return h?W.jsxDEV(_e,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:79,columnNumber:23},globalThis):W.jsxDEV("div",{className:"flex-1 grid grid-cols-1 lg:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)]",children:[e>=1024&&W.jsxDEV("div",{className:"flex flex-col justify-center items-center lg:p-[60px]",children:[W.jsxDEV(ye,{imgClass:"w-[60px]",textClass:"text-[28px]"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:82,columnNumber:11},globalThis),W.jsxDEV("p",{className:"text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto",children:"Khám phá xu hướng, theo dõi đơn hàng của bạn một cách dễ dàng và nâng cao trải nghiệm mua sắm của bạn."},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:83,columnNumber:11},globalThis),W.jsxDEV("img",{className:"max-w-[780px]",src:Ce,alt:"media"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:87,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:81,columnNumber:25},globalThis),W.jsxDEV("div",{className:"bg-widget flex items-center justify-center w-full py-10 px-4 lg:p-[60px]",children:W.jsxDEV(Ee,{className:"max-w-[460px] w-full",type:"slideUp",duration:400,delay:300,children:[W.jsxDEV("div",{className:"flex flex-col gap-2.5 text-center",children:[W.jsxDEV("h1",{children:"Chào mừng trở lại!"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:92,columnNumber:13},globalThis),W.jsxDEV("p",{className:"lg:max-w-[300px] m-auto 4xl:max-w-[unset]",children:"Khám phá các sản phẩm mới nhất của chúng tôi và tận hưởng trải nghiệm mua sắm của bạn."},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:93,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:91,columnNumber:11},globalThis),W.jsxDEV("form",{className:"mt-5",onSubmit:I(P),children:[W.jsxDEV("div",{className:"flex flex-col gap-5",children:[W.jsxDEV("div",{className:"field-wrapper",children:[W.jsxDEV("label",{htmlFor:"email",className:"field-label",children:"E-mail"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:101,columnNumber:17},globalThis),W.jsxDEV("input",{className:he("field-input",{"field-input--error":E.email}),id:"email",type:"text",placeholder:"Địa chỉ E-mail của bạn",..._("email",{required:!0,pattern:/^\S+@\S+$/i})},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:104,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:100,columnNumber:15},globalThis),W.jsxDEV(Se,{name:"password",control:j,rules:{required:!0},render:({field:b})=>W.jsxDEV(fe,{id:"password",placeholder:"Mật khẩu của bạn",error:E.password,innerRef:b.ref,isInvalid:E.password,value:b.value,onChange:b.onChange},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:115,columnNumber:19},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:111,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:99,columnNumber:13},globalThis),W.jsxDEV("div",{className:"flex flex-col items-center gap-6 mt-4 mb-10",children:W.jsxDEV("button",{className:"btn btn--primary w-full",type:"submit",disabled:h,children:"Đăng Nhập"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:118,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:117,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:98,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:90,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:89,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/AuthLayout.jsx",lineNumber:80,columnNumber:10},globalThis)},Ve=()=>W.jsxDEV(W.Fragment,{children:[W.jsxDEV(Ne,{title:"Login"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Login.jsx",lineNumber:6,columnNumber:13},globalThis),W.jsxDEV(Le,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Login.jsx",lineNumber:7,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Login.jsx",lineNumber:5,columnNumber:10},globalThis);export{Ve as default};
