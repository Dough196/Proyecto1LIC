UserVoice=window.UserVoice||[];
(function(){
  var uv=document.createElement('script');
  uv.type='text/javascript';
  uv.async=true;
  uv.src='//widget.uservoice.com/mMIblmZIUBvR0vQsiZC77Q.js';
  var s=document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(uv,s)
})();

UserVoice = window.UserVoice || [];
function showClassicWidget() {
  UserVoice.push(['showLightbox', 'classic_widget', {
    mode: 'full',
    primary_color: '#cc6d00',
    link_color: '#007dbf',
    default_mode: 'support',
    forum_id: 264232
  }]);
}