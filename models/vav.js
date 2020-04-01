

var freezeProtection, returnAirSmokeDetector, supplyAirSmokeDetector, fireShutdown, Evacuation,Pressurization,Purge = false;
//var runConditions = [{'ZS Sensor with Linkage':0}, {'WS Sensor with Linkage':0}];
var safties =  {'freezeProtection':0,'returnAirSmokeDetector':0,'supplyAirSmokeDetector':0};
var remoteOccupancy = {'none':0,'binaryInput':0};
var smokeControl = {'fireShutdown':0,'Evacuation':0,'Pressurization':0,'Purge':0};
var outdoorAirTemp = {'physicalInput':0,'networkInput':0};
var supplyFan = {'blowThrough':0,'drawThrough':0};
var vfd;
var returnFan = {'none':0,'onOff':0,'buildingPressurization':0,'trackingPercentOfSupplyFanSpeed':{'feedbackBinaryInputDryContact':0,'feedbackAnalogInputAmperage':0},'trackingBasedOnSupplyFanFlow':{'feedbackBinaryInputDryContact':0,'feedbackAnalogInputAmperage':0}};
var exhaustFan = {'none':0, 'onOff':0,'buildingPressurization':0};
var preHeating = {'none':0,'electricStaging':0,'gasStage':0,'SCRElectric':0,'hotWaterModulating':0,'hotWaterFaceBypass':0
, 'steamModulating':0,'steamFaceBypass':0};
var heating = {'none':0,'electricStaging':0,'gasStage':0, 'SCRElectric':0,'hotWaterModulating':0,'hotWaterExternal Face Bypass':0
, 'hotWaterInternalFaceAndBypass':0,'hotWaterIntegralFaceAndBypass':0,'steamModulating':0,'steamExternalFaceBypass':0,'steamInternalFaceAndBypass':0, 'steamIntegralFaceAndBypass':0};
var cooling = {'none':0,'dxCooling':0,'chilledWaterModulating':0,'chilledWaterModulatingCoilDeltaT':0,'chilledWaterExternalFaceBypass':0,'chilledWaterInternalFaceBypass':0};
var mixedAirDamper = {'economizerOAEnthalpySwitch':0, 'economizerOAEnthalpySensor':0,'economizerOADifferentialEnthalpy':0,'economizerOADryBulb':0};
var minOutsideAir = {'none':0,'differentialCO2':0,'spaceCO2':0,'oADamperFlowStation':0};
var humidityOptions = {'indoorRelativeHumiditySensor':0,'dehumidification':0};
var humidifier = {'none':0,'ss':0,'sSAndModulation':0};
var RARH = false;
var OARH = false;
var RACO2 = false;
var OACO2 = false;
var faceBypassDampers = {'none':0,'external':0,'internal':0};
var filterOneMonitoring = {'none':0,'hours':0,'status':0,'differentialPressure':0};
var filterTwoMonitoring ={'none':0,'hours':0,'status':0,'differentialPressure':0};
var supplyAirCoolingSetpoint = {'fixedWithPrioritySpaceTemperatureReset':0};

var vav = 
    {
        remoteOccupancy, 
        safties,
        smokeControl, 
        outdoorAirTemp, 
        supplyFan,
        vfd, 
        returnFan, 
        exhaustFan, 
        preHeating,
        supplyAirCoolingSetpoint,
        faceBypassDampers,
        heating,
        cooling,
        mixedAirDamper,
        minOutsideAir,
        humidityOptions,
        humidifier,
        RARH,
        OARH,
        RACO2,
        OACO2,
        filterOneMonitoring,
        filterTwoMonitoring,

        setRemoteOccupancyBinaryInput : function(x){
            this.remoteOccupancy.binaryInput = x;
        },

         setRemoteOccupancyNone : function(x){
            this.remoteOccupancy.none = x;
        }
    };

    module.exports = vav;