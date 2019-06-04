$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/1023545/sts-workspace/poc/bdd_Test/src/main/java/Features/home.feature");
formatter.feature({
  "line": 1,
  "name": "Patient Management System functionalities",
  "description": "",
  "id": "patient-management-system-functionalities",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "TC_1_Validating Home page",
  "description": "",
  "id": "patient-management-system-functionalities;tc-1-validating-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Launch ge hospital mgs",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "home should be appiear",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see Add Patient Button in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should see Patient List Button in home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see Help Button in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should click \"Add Patient\" Button in home page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Patient Form\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see \"Patient Email\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Launch_ge_hospital_mgs()"
});
formatter.result({
  "duration": 6902904539,
  "status": "passed"
});
formatter.match({
  "location": "Definition.home_should_be_appiear()"
});
formatter.result({
  "duration": 35576593,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Add_Patient_Button_in_home_page()"
});
formatter.result({
  "duration": 59333567,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Patient_List_Button_in_home_page()"
});
formatter.result({
  "duration": 59005065,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Help_Button_in_home_page()"
});
formatter.result({
  "duration": 45151563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Patient",
      "offset": 16
    }
  ],
  "location": "Definition.I_should_click_Add_Patient_Button_in_home_page(String)"
});
formatter.result({
  "duration": 51210225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Form",
      "offset": 14
    }
  ],
  "location": "Definition.I_should_see_displayed_value(String)"
});
formatter.result({
  "duration": 72143822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Email",
      "offset": 14
    }
  ],
  "location": "Definition.I_should_see_displayed_value(String)"
});
formatter.result({
  "duration": 60311,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_close_the_application()"
});
formatter.result({
  "duration": 152874544,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "GET BY ID",
  "description": "",
  "id": "patient-management-system-functionalities;get-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Launch ge hospital mgs",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "home should be appiear",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see Add Patient Button in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should see Patient List Button in home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see Help Button in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I should click \"Patient List\" Button in home page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Patient List\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should click patinet number \"62\" in patient list",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#"
    }
  ],
  "line": 27,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Launch_ge_hospital_mgs()"
});
formatter.result({
  "duration": 7317402532,
  "status": "passed"
});
formatter.match({
  "location": "Definition.home_should_be_appiear()"
});
formatter.result({
  "duration": 30855674,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Add_Patient_Button_in_home_page()"
});
formatter.result({
  "duration": 57342991,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Patient_List_Button_in_home_page()"
});
formatter.result({
  "duration": 49056682,
  "status": "passed"
});
formatter.match({
  "location": "Definition.I_should_see_Help_Button_in_home_page()"
});
formatter.result({
  "duration": 51277593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient List",
      "offset": 16
    }
  ],
  "location": "Definition.I_should_click_Add_Patient_Button_in_home_page(String)"
});
formatter.result({
  "duration": 57932625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient List",
      "offset": 14
    }
  ],
  "location": "Definition.I_should_see_displayed_value(String)"
});
formatter.result({
  "duration": 67120708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "62",
      "offset": 31
    }
  ],
  "location": "Definition.I_should_click_Patient_id(String)"
});
formatter.result({
  "duration": 30038779478,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027btn btn-white-view\u0027][contains(text(),\u002762\u0027)]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027BLRDT0891\u0027, ip: \u0027172.18.36.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52550}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}), userDataDir\u003dC:\\Users\\1023545\\AppData\\Local\\Temp\\scoped_dir10532_30390}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.169, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3611d21852fb7b1d3c61cd300b75ecb8\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027btn btn-white-view\u0027][contains(text(),\u002762\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefinitions.Definition.I_should_click_Patient_id(Definition.java:113)\r\n\tat ✽.When I should click patinet number \"62\" in patient list(D:/1023545/sts-workspace/poc/bdd_Test/src/main/java/Features/home.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition.I_close_the_application()"
});
formatter.result({
  "status": "skipped"
});
});