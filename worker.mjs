const HOST='kailasaverul.com';
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if((url.hostname===HOST||url.hostname==='www.'+HOST)&&(url.protocol==='http:'||url.hostname==='www.'+HOST)){
   url.protocol='https:';url.hostname=HOST;return Response.redirect(url.toString(),301);
  }
  const explicitError=/^\/404(?:\.html|\/)?$/.test(url.pathname);
  const assetUrl=new URL(url);if(explicitError)assetUrl.pathname='/404';
  const response=await env.ASSETS.fetch(explicitError?new Request(assetUrl,request):request);const headers=new Headers(response.headers);
  const isError=response.status===404||explicitError;
  if(isError)headers.set('X-Robots-Tag','noindex, follow');
  headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');headers.set('Permissions-Policy','geolocation=(),camera=(),microphone=()');
  headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://api.open-meteo.com https://www.google-analytics.com https://region1.google-analytics.com https://cloudflareinsights.com; img-src 'self' data: https://www.google-analytics.com; font-src 'self'; frame-src 'none'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
  if(url.protocol==='https:'&&(url.hostname===HOST||url.hostname==='www.'+HOST))headers.set('Strict-Transport-Security','max-age=31536000');
  if(headers.get('Content-Type')?.includes('text/html'))headers.set('Cache-Control','no-store');
  return new Response(response.body,{status:isError?404:response.status,statusText:isError?'Not Found':response.statusText,headers});
 }
};
