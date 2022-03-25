gdjs.keybindsCode = {};
gdjs.keybindsCode.GDleftObjects1= [];
gdjs.keybindsCode.GDleftObjects2= [];
gdjs.keybindsCode.GDleftObjects3= [];
gdjs.keybindsCode.GDdownObjects1= [];
gdjs.keybindsCode.GDdownObjects2= [];
gdjs.keybindsCode.GDdownObjects3= [];
gdjs.keybindsCode.GDupObjects1= [];
gdjs.keybindsCode.GDupObjects2= [];
gdjs.keybindsCode.GDupObjects3= [];
gdjs.keybindsCode.GDrightObjects1= [];
gdjs.keybindsCode.GDrightObjects2= [];
gdjs.keybindsCode.GDrightObjects3= [];
gdjs.keybindsCode.GDarrowkeyonObjects1= [];
gdjs.keybindsCode.GDarrowkeyonObjects2= [];
gdjs.keybindsCode.GDarrowkeyonObjects3= [];
gdjs.keybindsCode.GDinfoObjects1= [];
gdjs.keybindsCode.GDinfoObjects2= [];
gdjs.keybindsCode.GDinfoObjects3= [];
gdjs.keybindsCode.GDNewObjectObjects1= [];
gdjs.keybindsCode.GDNewObjectObjects2= [];
gdjs.keybindsCode.GDNewObjectObjects3= [];
gdjs.keybindsCode.GDrighttextObjects1= [];
gdjs.keybindsCode.GDrighttextObjects2= [];
gdjs.keybindsCode.GDrighttextObjects3= [];
gdjs.keybindsCode.GDuptextObjects1= [];
gdjs.keybindsCode.GDuptextObjects2= [];
gdjs.keybindsCode.GDuptextObjects3= [];
gdjs.keybindsCode.GDdowntextObjects1= [];
gdjs.keybindsCode.GDdowntextObjects2= [];
gdjs.keybindsCode.GDdowntextObjects3= [];
gdjs.keybindsCode.GDlefttextObjects1= [];
gdjs.keybindsCode.GDlefttextObjects2= [];
gdjs.keybindsCode.GDlefttextObjects3= [];
gdjs.keybindsCode.GDstartObjects1= [];
gdjs.keybindsCode.GDstartObjects2= [];
gdjs.keybindsCode.GDstartObjects3= [];
gdjs.keybindsCode.GDdoneObjects1= [];
gdjs.keybindsCode.GDdoneObjects2= [];
gdjs.keybindsCode.GDdoneObjects3= [];

gdjs.keybindsCode.conditionTrue_0 = {val:false};
gdjs.keybindsCode.condition0IsTrue_0 = {val:false};
gdjs.keybindsCode.condition1IsTrue_0 = {val:false};
gdjs.keybindsCode.condition2IsTrue_0 = {val:false};
gdjs.keybindsCode.conditionTrue_1 = {val:false};
gdjs.keybindsCode.condition0IsTrue_1 = {val:false};
gdjs.keybindsCode.condition1IsTrue_1 = {val:false};
gdjs.keybindsCode.condition2IsTrue_1 = {val:false};


gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDleftObjects2Objects = Hashtable.newFrom({"left": gdjs.keybindsCode.GDleftObjects2});gdjs.keybindsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects2);

gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDleftObjects2Objects, runtimeScene, true, false);
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.keybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects2);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects2[i].setString("");
}
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDdownObjects2Objects = Hashtable.newFrom({"down": gdjs.keybindsCode.GDdownObjects2});gdjs.keybindsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects2);

gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDdownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.keybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects2);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects2[i].setString("");
}
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDupObjects2Objects = Hashtable.newFrom({"up": gdjs.keybindsCode.GDupObjects2});gdjs.keybindsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects2);

gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDupObjects2Objects, runtimeScene, true, false);
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.keybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects2);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects2[i].setString("");
}
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects1);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDrightObjects2Objects = Hashtable.newFrom({"right": gdjs.keybindsCode.GDrightObjects2});gdjs.keybindsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects2);

gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDrightObjects2Objects, runtimeScene, true, false);
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.keybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects2);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects2[i].setString("");
}
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.keybindsCode.GDstartObjects1});gdjs.keybindsCode.eventsList4 = function(runtimeScene) {

{


gdjs.keybindsCode.eventsList0(runtimeScene);
}


{


gdjs.keybindsCode.eventsList1(runtimeScene);
}


{


gdjs.keybindsCode.eventsList2(runtimeScene);
}


{


gdjs.keybindsCode.eventsList3(runtimeScene);
}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
{gdjs.keybindsCode.conditionTrue_1 = gdjs.keybindsCode.condition1IsTrue_0;
gdjs.keybindsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21398212);
}
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "mobile");
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sonic", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.keybindsCode.GDstartObjects1);

gdjs.keybindsCode.condition0IsTrue_0.val = false;
gdjs.keybindsCode.condition1IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_46keybindsCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.keybindsCode.condition0IsTrue_0.val ) {
{
gdjs.keybindsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.keybindsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects1);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.keybindsCode.GDlefttextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDlefttextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.keybindsCode.GDdowntextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDdowntextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.keybindsCode.GDuptextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDuptextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.keybindsCode.GDrighttextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDrighttextObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menugf", false);
}}

}


{


gdjs.keybindsCode.condition0IsTrue_0.val = false;
{
gdjs.keybindsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.keybindsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "testvoice.mp3");
}{gdjs.evtTools.sound.playSound(runtimeScene, "breakfast.mp3", true, 100, 1);
}}

}


};

gdjs.keybindsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.keybindsCode.GDleftObjects1.length = 0;
gdjs.keybindsCode.GDleftObjects2.length = 0;
gdjs.keybindsCode.GDleftObjects3.length = 0;
gdjs.keybindsCode.GDdownObjects1.length = 0;
gdjs.keybindsCode.GDdownObjects2.length = 0;
gdjs.keybindsCode.GDdownObjects3.length = 0;
gdjs.keybindsCode.GDupObjects1.length = 0;
gdjs.keybindsCode.GDupObjects2.length = 0;
gdjs.keybindsCode.GDupObjects3.length = 0;
gdjs.keybindsCode.GDrightObjects1.length = 0;
gdjs.keybindsCode.GDrightObjects2.length = 0;
gdjs.keybindsCode.GDrightObjects3.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects1.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects2.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects3.length = 0;
gdjs.keybindsCode.GDinfoObjects1.length = 0;
gdjs.keybindsCode.GDinfoObjects2.length = 0;
gdjs.keybindsCode.GDinfoObjects3.length = 0;
gdjs.keybindsCode.GDNewObjectObjects1.length = 0;
gdjs.keybindsCode.GDNewObjectObjects2.length = 0;
gdjs.keybindsCode.GDNewObjectObjects3.length = 0;
gdjs.keybindsCode.GDrighttextObjects1.length = 0;
gdjs.keybindsCode.GDrighttextObjects2.length = 0;
gdjs.keybindsCode.GDrighttextObjects3.length = 0;
gdjs.keybindsCode.GDuptextObjects1.length = 0;
gdjs.keybindsCode.GDuptextObjects2.length = 0;
gdjs.keybindsCode.GDuptextObjects3.length = 0;
gdjs.keybindsCode.GDdowntextObjects1.length = 0;
gdjs.keybindsCode.GDdowntextObjects2.length = 0;
gdjs.keybindsCode.GDdowntextObjects3.length = 0;
gdjs.keybindsCode.GDlefttextObjects1.length = 0;
gdjs.keybindsCode.GDlefttextObjects2.length = 0;
gdjs.keybindsCode.GDlefttextObjects3.length = 0;
gdjs.keybindsCode.GDstartObjects1.length = 0;
gdjs.keybindsCode.GDstartObjects2.length = 0;
gdjs.keybindsCode.GDstartObjects3.length = 0;
gdjs.keybindsCode.GDdoneObjects1.length = 0;
gdjs.keybindsCode.GDdoneObjects2.length = 0;
gdjs.keybindsCode.GDdoneObjects3.length = 0;

gdjs.keybindsCode.eventsList4(runtimeScene);
return;

}

gdjs['keybindsCode'] = gdjs.keybindsCode;
