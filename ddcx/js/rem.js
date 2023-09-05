window.onload = function(){
    /*750�������ʦ������Ƹ�Ŀ��ȣ������Ƹ��Ƕ��٣���д����;100�����������������д100��
      Ϊ���Ժ����,���磬�������һ��������100px,�Ϳ���дΪ1rem,�Լ�1px=0.01rem�ȵ�*/
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}