function submitVAV() {

    $.get('/vavModel', function (data, status) {
        console.log(data);
        var vav = data.ahu;
        console.log(JSON.stringify(vav));
        var x = document.getElementById('remoteOccupancy');
        var v = x.selectedIndex;
        if (v == 0) {
            vav.remoteOccupancy.none.isUsed = true;

        } else if (v == 1) {

            vav.remoteOccupancy.binaryInput.isUsed = true;
        }
        x = document.getElementById('freezeProtection');
        if (x.checked == true) {
            vav.safties.freezeProtection.isUsed = true;
        }
        x = document.getElementById('returnAirSmokeDetector');
        if (x.checked == true) {
            vav.safties.returnAirSmokeDetector.isUsed = true;
        }
        x = document.getElementById('supplyAirSmokeDetector');
        if (x.checked == true) {
            vav.safties.supplyAirSmokeDetector.isUsed = true;
        }
        x = document.getElementById('fireShutdown');
        if (x.checked == true) {
            vav.smokeControl.fireShutdown.isUsed = true;
        }
        x = document.getElementById('evacuation');
        if (x.checked == true) {
            vav.smokeControl.evacuation.isUsed = true;
        }
        x = document.getElementById('pressurization');
        if (x.checked == true) {
            vav.smokeControl.pressurization.isUsed = true;
        }
        x = document.getElementById('purge');
        if (x.checked == true) {
            vav.smokeControl.purge.isUsed = true;
        }
        x = document.getElementById('outdoorAirTemp');
        v = x.selectedIndex;
        if (v == 0) {
            vav.outdoorAirTemp.physicalInput.isUsed = true;

        } else if (v == 1) {

            vav.outdoorAirTemp.networkInput.isUsed = true;
        }
        x = document.getElementById('supplyFan');
        v = x.selectedIndex;
        if (v == 0) {
            vav.supplyFan.blowThrough.isUsed = true;

        } else if (v == 1) {

            vav.supplyFan.drawThrough.isUsed = true;
        }
  
        x = document.getElementById('returnFan');
        v = x.selectedIndex;
        if (v == 0) {
            vav.returnFan.none.isUsed = true;

        } else if (v == 1) {

            vav.returnFan.onOff.isUsed = true;
        }else if(v == 2){

        }
        x = document.getElementById('exhaustFan');
        v = x.selectedIndex;
        if (v == 0) {
            vav.exhaustFan.none = true;
        } else if (v == 1) {

            vav.exhaustFan.onOff.isUsed = true;
        }
        x = document.getElementById('preHeating');
        v = x.selectedIndex;
        if (v == 0) {
            vav.preHeating.none.isUsed = true;


        } else if (v == 1) {

            vav.preHeating.electricStaging.isUsed = true;

        } else if (v == 2) {

            vav.preHeating.SCRElectric.isUsed = true;

        } else if (v == 3) {

            vav.preHeating.hotWaterModulating.isUsed = true;

        } else if (v == 4) {

            vav.preHeating.hotWaterFaceBypass.isUsed = true;

        } else if (v == 5) {
            vav.preHeating.steamModulating.isUsed = true;
        } else if (v == 6) {
            vav.preHeating.none = 0;

            vav.preHeating.steamFaceBypass.isUsed = true;
        }
        x = document.getElementById('faceAndBypassDampers');
        v = x.selectedIndex;
        if (v == 0) {
            vav.faceAndBypassDampers.none.isUsed = true;

        } else if (v == 1) {
            vav.faceAndBypassDampers.external.isUsed = true;

        } else if (v == 2) {
            vav.faceAndBypassDampers.internal.isUsed = true;
        }
        x = document.getElementById('heating').selectedIndex;
        if (x == 0) {
            vav.heating.none.isUsed = true;
        } else if (x == 1) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 1;
        } else if (x == 2) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 2;

        } else if (x == 3) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 3;
        } else if (x == 4) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 4;
        } else if (x == 5) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 5;
        } else if (x == 6) {

            vav.heating.electricStaging.isUsed = true;
            vav.heating.electricStaging.points.stages = 6;
        } else if (x == 7) {

            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 1;
        } else if (x == 8) {
            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 2;
        } else if (x == 9) {
            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 3;
        } else if (x == 10) {
            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 4;
        } else if (x == 11) {
            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 5;
        } else if (x == 12) {
            vav.heating.gasStage.isUsed = true;
            vav.heating.gasStage.points.stages = 6;
        } else if (x == 13) {

            vav.heating.SCRElectric.isUsed = true;

        } else if (x == 14) {

            vav.heating.hotWaterModulating.isUsed = true;

        } else if (x == 15) {

            vav.heating.hotWaterExternalFaceAndBypass.isUsed = true;

        } else if (x == 16) {

            vav.heating.hotWaterInternalFaceAndBypass.isUsed = true;

        } else if (x == 17) {

            vav.heating.hotWaterIntegralFaceAndBypass.isUsed = true;

        } else if (x == 18) {

            vav.heating.steamModulating.isUsed = true;

        } else if (x == 19) {

            vav.heating.steamExternalFaceBypass.isUsed = true;

        } else if (x == 20) {

            vav.heating.steamInternalFaceAndBypass.isUsed = true;

        } else if (x == 21) {

            vav.heating.steamIntegralFaceAndBypass.isUsed = 1;
        }
        x = document.getElementById('cooling').selectedIndex;
        if (x == 0) {
            vav.cooling.none.isUsed = true;

        } else if (x == 1) {

            vav.cooling.dXCooling.isUsed = true;
            vav.cooling.dXCooling.points.stages = 1;
        } else if (x == 2) {

            vav.cooling.chilledWaterModulating.isUsed = true;

        } else if (x == 3) {

            vav.cooling.chilledWaterModulatingCoilDeltaT.isUsed = true;

        } else if (x == 4) {

            vav.cooling.chilledWaterExternalFaceBypass.isUsed = true;

        } else if (x == 5) {

            vav.cooling.chilledWaterInternalFaceBypass.isUsed = true;
        }
        x = document.getElementById('mixedAirDamper').selectedIndex;
        if (x == 0) {
            vav.mixedAirDamper.none.isUsed = true;

        } else if (x == 1) {
            vav.mixedAirDamper.economizerOAEnthalpySwitch.isUsed = true
        } else if (x == 2) {


            vav.mixedAirDamper.economizerOAEnthalpySensor.isUsed = true;

        } else if (x == 3) {

            vav.mixedAirDamper.economizerOADifferentialEnthalpy.isUsed = true;

        } else if (x == 4) {

            vav.mixedAirDamper.economizerOADryBulb.isUsed = true;
        }
        x = document.getElementById('minOutsideAir').selectedIndex;
        if (x == 0) {
            vav.minOutsideAir.none.isUsed = true;

        } else if (x == 1) {

            vav.minOutsideAir.differentialCO2.isUsed = true;

        } else if (x == 2) {

            vav.minOutsideAir.returnSpaceCO2.isUsed = true;
        }
        x = document.getElementById('humidityControl');
        if (x.checked == true) {
            vav.humidityControl.isUsed = true;
        } else {
            vav.humidityControl.isUsed = false;
        }
        x = document.getElementById('humidifier').selectedIndex;
        if (x == 0) {
            vav.humidifier.none.isUsed = true;

        } else if (x == 1) {

            vav.humidifier.SS.isUsed = true;

        } else if (x == 2) {

            vav.humidifier.sSAndModulation.isUsed = true;
        }
        x = document.getElementById('RARH');
        if (x.checked == true) {
            vav.RARH.RARH.isUsed = true;
        } else {
            vav.RARH.RARH.isUsed = false;
        }
        x = document.getElementById('RACO2');
        if (x.checked == true) {
            vav.RACO2.RACO2.isUsed = true;
        } else {
            vav.RACO2.RACO2.isUsed = false;
        }
        x = document.getElementById('OARH');
        if (x.checked == true) {
            vav.OARH.OARH.isUsed = true;
        } else {
            vav.OARH.OARH.isUsed = false;
        }
        x = document.getElementById('OACO2');
        if (x.checked == true) {
            vav.OACO2.OACO2.isUsed = true;
        } else {
            vav.OACO2.OACO2.isUsed = false;
        }
        x = document.getElementById('filterOneMonitoring').selectedIndex;
        if (x == 0) {
            vav.filterOneMonitoring.none.isUsed = true;

        } else if (x == 1) {

            vav.filterOneMonitoring.hours.isUsed = true;

        } else if (x == 2) {

            vav.filterOneMonitoring.status.isUsed = true;

        } else if (x == 3) {

            vav.filterOneMonitoring.differentialPressure.isUsed = true;
        }
        x = document.getElementById('filterTwoMonitoring').selectedIndex;
        if (x == 0) {
            vav.filterTwoMonitoring.none.isUsed = true;

        } else if (x == 1) {

            vav.filterTwoMonitoring.hours.isUsed = true;

        } else if (x == 2) {

            vav.filterTwoMonitoring.status.isUsed = true;

        } else if (x == 3) {

            vav.filterTwoMonitoring.differentialPressure.isUsed = true;
        }
        console.log(JSON.stringify(vav));
        createPointsList(vav);
        var unit = getUnit();
        var projectID = unit.project;
        localStorage.setItem('ahu', JSON.stringify(vav));
        //var project = JSON.parse(localStorage.getItem('project'));
        //var abc = document.getElementById('selectAHU').selectedIndex;
        //console.log(project);
        //console.log(abc);
        //project.units[abc - 1].points = vav;

        //localStorage.setItem('Options', JSON.stringify(project));

    });
}