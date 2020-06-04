function getVAV() {

   var html = '<div id="accordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Remote Occupancy </button> </h5> </div> <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion"> <div class="card-body"> <label for="runCond">Remote Occupancy</label> <select id="remoteOccupancy" name="runCond"> <option value="none">none</option> <option value="BinaryInput">binary Input</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Safeties </button> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"> <div class="card-body"> <ul> <li><input id="freezeProtection" type="checkbox" value="1">Freeze Protection</li> <li><input id="returnAirSmokeDetector" type="checkbox" value="1">Return Air Smoke Detector</li> <li><input id="supplyAirSmokeDetector" type="checkbox" value="1">Supply Air Smoke Detector</li> </ul>> </div> </div> </div> <div class="card"> <div class="card-header" id="headingThree"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Smoke Control </button> </h5> </div> <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion"> <div class="card-body"> <ul> <li> <input id="fireShutdown" type="checkbox" value="1">Fire Shutdown </li> <li><input id="evacuation" type="checkbox" value="1">Evacuation </li> <li><input id="pressurization" type="checkbox" value="1">Pressurization</li> <li><input id="purge" type="checkbox" name="Purge" value="1">Purge </li> </ul>  </div> </div> </div> <div class="card"> <div class="card-header" id="headingFour"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Outdoor Air Temperature </button> </h5> </div> <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion"> <div class="card-body"> <label for="OAT">Outdoor Air Temperature</label> <select id="outdoorAirTemp" name="OAT"> <option value="physicalInput">Physical Input</option> <option value="networkInput">Network Input</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingFive"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Supply Fan </button> </h5> </div> <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion"> <div class="card-body"> <label for="SF">Supply Fan</label> <select id="supplyFan" name="SF"> <option value="blowThrough">Blow Through -- On - Off</option> <option value="drawThrough">Draw Through -- On - Off</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingSix"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> VFD </button> </h5> </div> <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion"> <div class="card-body"> <label for="VFD">VFD</label> <input id="vfd" type="checkbox" value="1">Single Zone VFD<br><br> </div> </div> </div> <div class="card"> <div class="card-header" id="headingSeven"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"> Return Fan </button> </h5> </div> <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion"> <div class="card-body"> <label for="ReturnFan">Return Fan</label> <select id="returnFan" name="RF"> <option value="none">None</option> <option value="onOff">On - Off</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingEight"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"> Exhaust Fan </button> </h5> </div> <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion"> <div class="card-body"> <label for="EF">Exhaust Fan</label> <select id="exhaustFan" name="EF"> <option value="none">None</option> <option value="onOff">On - Off</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingNine"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"> Pre-heating </button> </h5> </div> <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion"> <div class="card-body"> <label for="Preheating">Preheating</label> <select id="preHeating" name="Preheating"> <option value="none">None</option> <option value="electricStaging">Electric Staging</option> <option value="SCRElectric">SCR Electric</option> <option value="hotWaterModulating">Hot Water: Modulating</option> <option value="hotWaterModulationCoilDeltaT">Hot Water: Modulating Coil Delta T </option> <option value="hotWaterExternalFaceAndBypass">Hot Water: External Face and Bypass </option> <option value="hotWaterInternalFaceAndBypass">Hot Water: Internal Face and Bypass </option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTen"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen"> Face and Bypass Dampers </button> </h5> </div> <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion"> <div class="card-body"> <label for="FaceBypassD">Face and Bypass Dampers</label> <select id="faceAndBypassDampers" name="FaceBypassD"> <option value="none">None</option> <option value="external">External Bypass</option> <option value="internal">Internal Bypass</option> </select><br><br> </div> </div> </div> <div class="card"> <div class="card-header" id="headingEleven"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven"> Heating </button> </h5> </div> <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion"> <div class="card-body"> <label for="Heating">Heating</label> <select id="heating"> <option value="none">None</option> <option value="electricStaging1">Electric Staging 1</option> <option value="electricStaging2">Electric Staging 2</option> <option value="electricStaging3">Electric Staging 3</option> <option value="electricStaging4">Electric Staging 4</option> <option value="electricStaging5">Electric Staging 5</option> <option value="electricStaging6">Electric Staging 6</option> <option value="gasStaging1">Gas Staging 1</option> <option value="gasStaging2">Gas Staging 2</option> <option value="gasStaging3">Gas Staging 3</option> <option value="gasStaging4">Gas Staging 4</option> <option value="gasStaging5">Gas Staging 5</option> <option value="gasStaging6">Gas Staging 6</option> <option value="SCRElectric">SCR Electric</option> <option value="hotWaterModulating">Hot Water: Modulating</option> <option value="hotWaterExternalFaceAndBypass">Hot Water: External Face and Bypass </option> <option value="hotWaterInternalFaceAndBypass">Hot Water: Internal Face and Bypass </option> <option value="hotWaterIntegralFaceAndBypass">Hot Water: Integral Face and Bypass </option> <option value="steamModulating">Steam: Modulating</option> <option value="steamExternalFaceBypass">Steam: External Face and Bypass</option> <option value="steamInternalFaceAndBypass">Steam: Internal Face and Bypass</option> <option value="steamIntegralFaceAndBypass">Steam: Integral Face and Bypass</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwelve"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve"> Cooling </button> </h5> </div> <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion"> <div class="card-body"> <label for="Cooling">Cooling</label> <select id="cooling" name="Cooling"> <option value="none">None</option> <option value="dXCooling">Dx Cooling</option> <option value="chilledWaterModulating">Chilled Water: Modulating</option> <option value="chilledWaterModulatingCoilDeltaT">Chilled Water: Modulating Coil Delta T </option> <option value="chilledWaterExternalFaceBypass">Chilled Water: External Face and Bypass </option> <option value="chilledWaterInternalFaceBypass">Chilled Water: Internal Face and Bypass </option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="heading13"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13"> Mixed Air Damper </button> </h5> </div> <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordion"> <div class="card-body"> <label for="MAD">Mixed Air Dampers</label> <select id="mixedAirDamper" name="MAD"> <option value="none">None</option> <option value="economizerOAEnthalpySwitch">Economizer: OA Enthalpy Switch</option> <option value="economizerOAEnthalpySensor">Economizer: OA Enthalpy Sensor</option> <option value="economizerOADifferentialEnthalpy">Economizer: OA Differential Enthalpy </option> <option value="economizerOADryBulb">Economizer: OA Dry Bulb</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="heading14"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14"> Minimum Outside Air </button> </h5> </div> <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordion"> <div class="card-body"> <label for="mOA">Minimum Outside Air</label> <select id="minOutsideAir" name="mOA"> <option value="none">None</option> <option value="differentialCO2">Differential CO2</option> <option value="returnSpaceCO2">Return/Space CO2</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="heading15"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15"> Mixed Air Damper </button> </h5> </div> <div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordion"> <div class="card-body"> <label for="MAD">Mixed Air Dampers</label> <select id="mixedAirDamper" name="MAD"> <option value="none">None</option> <option value="economizerOAEnthalpySwitch">Economizer: OA Enthalpy Switch</option> <option value="economizerOAEnthalpySensor">Economizer: OA Enthalpy Sensor</option> <option value="economizerOADifferentialEnthalpy">Economizer: OA Differential Enthalpy </option> <option value="economizerOADryBulb">Economizer: OA Dry Bulb</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="heading16"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16"> Humidity Control </button> </h5> </div> <div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordion"> <div class="card-body"> <label for="humidityControl">Humiditiy Control</label> <input id="humidityControl" type="checkbox" name="humdidtyControl">Dehumidification <br><br> <label for="humidifier">Humidifier</label> <select id="humidifier" name="humidifier"> <option value="none">None</option> <option value="SS">Humidifier SS</option> <option value="sSAndModulation">Humidifier SS and Modulation</option> </select> </div> </div> </div> <div class="card"> <div class="card-header" id="heading17"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17"> Miscellaneous Monitoring </button> </h5> </div> <div id="collapse17" class="collapse" aria-labelledby="heading17" data-parent="#accordion"> <div class="card-body"> <ul> <li><input id="RARH" type="checkbox" name="RARH">Return Air Relative Humidity</li> <li><input id="OARH" type="checkbox" name="OARH">Outdoor Air Relative Humidity</li> <li> <input id="RACO2" type="checkbox">Return Air CO2</li> <li><input id="OACO2" type="checkbox">Outdoor Air CO2</li> </ul> </div> </div> </div> <div class="card"> <div class="card-header" id="heading18"> <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18"> Filter Monitoring </button> </h5> </div> <div id="collapse18" class="collapse" aria-labelledby="heading18" data-parent="#accordion"> <div class="card-body"> <label for="f1M">Filter 1 Monitoring</label> <select id="filterOneMonitoring" name="f1M"> <option value="none">None</option> <option value="hours">Hours</option> <option value="status">Status</option> <option value="differentialPressure">Differential Pressure</option> </select> <br><br> <label for="f2M">Filter 2 Monitoring</label> <select id="filterTwoMonitoring" name="f2M"> <option value="none">None</option> <option value="hours">Hours</option> <option value="status">Status</option> <option value="differentialPressure">Differential Pressure</option> </select> </div> </div> </div> </div> <button onclick="submitVAV()">Generate Points List and Seqence</button> </div> ';
    document.getElementById('optionsDiv').innerHTML = html;
    vavControl();
}


function vavControl(){

    document.getElementById('heating').onchange = function () {
        var face = document.getElementById('faceAndBypassDampers');
        var cool = document.getElementById('cooling');
        if (this.selectedIndex == 15) {

            var y = face.length;
            var w = cool.length;
            var a = 0;
            face.selectedIndex = 1;
            for (a; a < y; a++) {
                if (a != 1) {
                    face.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 4) {
                    cool.options[a].disabled = true;
                }
            }

        } else if (this.selectedIndex == 16) {
            var y = face.length;
            var w = cool.length;
            var a = 0;
            face.selectedIndex = 2;
            for (a; a < y; a++) {
                if (a != 2) {
                    face.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 5) {
                    cool.options[a].disabled = true;
                }
            }
        } else if (this.selectedIndex == 19) {
            var y = face.length;
            var w = cool.length;
            var a = 1;
            face.selectedIndex = 1;
            for (a; a < y; a++) {
                if (a != 1) {
                    face.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 4) {
                    cool.options[a].disabled = true;
                }
            }
        } else if (this.selectedIndex == 20) {
            var y = face.length;
            var w = cool.length;
            var a = 0;
            face.selectedIndex = 2;
            for (a; a < y; a++) {
                if (a != 2) {
                    face.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 5) {
                    cool.options[a].disabled = true;
                }
            }
        } else {
            var y = face.length;
            var w = cool.length;
            var a = 0;
            face.selectedIndex = 0
            for (a; a < y; a++) {

                face.options[a].disabled = false;

            }
            for (a = 1; a < w; a++) {

                cool.options[a].disabled = false;

            }
        }
    };
    document.getElementById('faceAndBypassDampers').onclick = function () {

        var x = document.getElementById('faceAndBypassDampers').selectedIndex;
        var cool = document.getElementById('cooling');
        var heat = document.getElementById('heating');
        if (this.selectedIndex == 1) {
            var y = heat.length;
            var w = cool.length;
            var a = 1;
            for (a; a < y; a++) {
                if (a != 15 && a != 19) {
                    heat.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 4) {
                    cool.options[a].disabled = true;
                }
            }

        } else if (this.selectedIndex == 2) {
            var y = heat.length;
            var w = cool.length;
            var a = 1;
            for (a; a < y; a++) {
                if (a == 16 && a == 20) {
                    heat.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 5) {
                    cool.options[a].disabled = true;
                }
            }
        } else {
            var y = heat.length;
            var w = cool.length;
            var a = 1;
            for (a; a < y; a++) {

                heat.options[a].disabled = false;

            }
            for (a = 1; a < w; a++) {

                cool.options[a].disabled = false;

            }
        }
    };

    document.getElementById('cooling').onchange = function () {
        var heat = document.getElementById('heating');
        var face = document.getElementById('faceAndBypassDampers');
        if (this.selectedIndex == 4) {
            var y = heat.length;
            var w = face.length;
            var a = 1;
            face.selectedIndex = 1;
            for (a; a < y; a++) {
                if ((a == 15) || (a == 19)) {
                    heat.options[a].disabled = false;
                } else {
                    heat.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 1) {
                    face.options[a].disabled = true;
                }
            }

        } else if (this.selectedIndex == 5) {
            var y = heat.length;
            var w = face.length;
            var a = 1;
            face.selectedIndex = 2;
            for (a; a < y; a++) {
                if ((a == 16) || (a == 20)) {
                    heat.options[a].disabled = false;
                } else {
                    heat.options[a].disabled = true;
                }
            }
            for (a = 1; a < w; a++) {
                if (a != 2) {
                    face.options[a].disabled = true;
                }
            }
        } else {
            var y = heat.length;
            var w = face.length;
            var a = 0;
            face.selectedIndex = 0;
            for (a; a < y; a++) {

                heat.options[a].disabled = false;

            }
            for (a = 0; a < w; a++) {

                face.options[a].disabled = false;

            }
        }
    };

    document.getElementById('humidityControl').onchange = function () {
        var cool = document.getElementById('cooling');
        var x = cool.length;
        var a = 1;
        if (this.checked == true) {
            cool.options[0].disabled = true;
            for (a; a < x; a++) {
                cool.options[a].disabled = false;
            }
            alert("Must choose a cooling option!!!!");
        } else {
            cool.options[0].disabled = false;
        }
    };

    document.getElementById('minOutsideAir').onchange = function () {
        var x = this.selectedIndex;
        if (x != 0) {
            var node = document.getElementById('mixedAirDamper');
            node.options[0].disabled = true;
            alert("must choose mixed air control!");
        } else {
            var node = document.getElementById('mixedAirDamper');
            node.options[0].disabled = false;
        }
    };

    document.getElementById('returnFan').onchange = function () {
        if (this.selectedIndex != 0) {
            document.getElementById('exhaustFan').disabled = true;
        } else {
            document.getElementById('exhaustFan').disabled = false;
        }
    };

    document.getElementById('exhaustFan').onchange = function () {
        if (this.selectedIndex != 0) {
            document.getElementById('returnFan').disabled = true;
        } else {
            document.getElementById('returnFan').disabled = false;
        }
    };


}

