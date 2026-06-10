const oa_name = "迷茫的困惑";
const oa_description = "身是菩提树，心如明镜台。时时勤拂拭，莫使有尘埃";
const web_beian = "";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)