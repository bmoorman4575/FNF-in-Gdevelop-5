gdjs.menugfCode = {};
gdjs.menugfCode.GDtext1Objects1= [];
gdjs.menugfCode.GDtext1Objects2= [];
gdjs.menugfCode.GDintenssongObjects1= [];
gdjs.menugfCode.GDintenssongObjects2= [];
gdjs.menugfCode.GDsonicObjects1= [];
gdjs.menugfCode.GDsonicObjects2= [];
gdjs.menugfCode.GDlntObjects1= [];
gdjs.menugfCode.GDlntObjects2= [];
gdjs.menugfCode.GDNewSpriteObjects1= [];
gdjs.menugfCode.GDNewSpriteObjects2= [];
gdjs.menugfCode.GDdevbuldwarningObjects1= [];
gdjs.menugfCode.GDdevbuldwarningObjects2= [];
gdjs.menugfCode.GDNewTextInputObjects1= [];
gdjs.menugfCode.GDNewTextInputObjects2= [];

gdjs.menugfCode.conditionTrue_0 = {val:false};
gdjs.menugfCode.condition0IsTrue_0 = {val:false};
gdjs.menugfCode.condition1IsTrue_0 = {val:false};
gdjs.menugfCode.condition2IsTrue_0 = {val:false};


gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDsonicObjects1Objects = Hashtable.newFrom({"sonic": gdjs.menugfCode.GDsonicObjects1});gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDlntObjects1Objects = Hashtable.newFrom({"lnt": gdjs.menugfCode.GDlntObjects1});gdjs.menugfCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("sonic"), gdjs.menugfCode.GDsonicObjects1);

gdjs.menugfCode.condition0IsTrue_0.val = false;
gdjs.menugfCode.condition1IsTrue_0.val = false;
{
gdjs.menugfCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDsonicObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menugfCode.condition0IsTrue_0.val ) {
{
gdjs.menugfCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menugfCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tripple trouble with friends", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lnt"), gdjs.menugfCode.GDlntObjects1);

gdjs.menugfCode.condition0IsTrue_0.val = false;
gdjs.menugfCode.condition1IsTrue_0.val = false;
{
gdjs.menugfCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDlntObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menugfCode.condition0IsTrue_0.val ) {
{
gdjs.menugfCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menugfCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Defult song", true);
}}

}


{


gdjs.menugfCode.condition0IsTrue_0.val = false;
{
gdjs.menugfCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menugfCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "breakfast.mp3", true, 100, 1);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "menu");
}}

}


{


gdjs.menugfCode.condition0IsTrue_0.val = false;
{
gdjs.menugfCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "false";
}if (gdjs.menugfCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("devbuldwarning"), gdjs.menugfCode.GDdevbuldwarningObjects1);
{for(var i = 0, len = gdjs.menugfCode.GDdevbuldwarningObjects1.length ;i < len;++i) {
    gdjs.menugfCode.GDdevbuldwarningObjects1[i].hide();
}
}}

}


};

gdjs.menugfCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menugfCode.GDtext1Objects1.length = 0;
gdjs.menugfCode.GDtext1Objects2.length = 0;
gdjs.menugfCode.GDintenssongObjects1.length = 0;
gdjs.menugfCode.GDintenssongObjects2.length = 0;
gdjs.menugfCode.GDsonicObjects1.length = 0;
gdjs.menugfCode.GDsonicObjects2.length = 0;
gdjs.menugfCode.GDlntObjects1.length = 0;
gdjs.menugfCode.GDlntObjects2.length = 0;
gdjs.menugfCode.GDNewSpriteObjects1.length = 0;
gdjs.menugfCode.GDNewSpriteObjects2.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects1.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects2.length = 0;
gdjs.menugfCode.GDNewTextInputObjects1.length = 0;
gdjs.menugfCode.GDNewTextInputObjects2.length = 0;

gdjs.menugfCode.eventsList0(runtimeScene);
return;

}

gdjs['menugfCode'] = gdjs.menugfCode;
