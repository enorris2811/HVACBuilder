//var freezeProtection, returnAirSmokeDetector, supplyAirSmokeDetector, fireShutdown, Evacuation,Pressurization,Purge = false;
var runConditions = {
    'ZSSensorWithLinkage': {
        'isUsed': false,
        'points': {
            0: 'returnAirTemperature',
            1: 'supplyAirTemperature',
            2: 'supplyFanStatus',
            3: 'supplyFanSS',
            4: 'coolingSetpoint',
            5: 'heatingSetpoint',
            6: 'outdoorAirTemperature',
            7: 'spaceSetpointAdjust',
            8: 'spaceTemperature',
            9: 'spaceUnoccupiedOverride',
            10: 'schedule',
            11: 'highReturnAirTemperature',
            12: 'highSpaceTemperature',
            13: 'highSupplyAirTemperature',
            14: 'lowReturnAirTemperature',
            15: 'lowSpaceTemperature',
            16: 'lowSupplyAirTemperature',
            17: 'supplyFanFailure',
            18: 'supplyFanInHand',
            19: 'supplyFanRuntimeExceeded'
        },
        'sequence': " <strong>Run Conditions:</strong> The unit will supply conditioned air to its designated zone or linked air terminals and operates a constant volume air unit. The unit will run acccording to the following user selectable modes:<br> <ul> <li>Off</li> <li> Continuously</li> <li> via BAS Command</li> <li> as Locally Scheduled</li> <li> via Link Schedule</li> </ul><br> <br><strong>Off Mode:</strong> The unit will run and all dampers, valves and fans will remain in their off position.<br> <br><strong>Continuously:</strong>The unit will run continuously in the occupied mode.<br><br> <strong> via BAS Command:</strong> The unit will be enabled and disabled via a Bacnet Binary Command, either from a remote source or locally through the software interface. Once enabled the unit will run continuously in the occupied mode. <br><br><strong> as Locally Scheduled:</strong><br> The air handling unit will operate as a constant volume unit having setpoints that represent those of a single zone unit. The unit will then run according to a user finable time schdule in the follow modes: <br> <ul>Occupied Mode: <li> the unit will maintain A <input type='text' id='occHighSetpoint'placeholder='72'> degrees F space cooling setpoint. </li> <li> A <input type='text' id='occLowSetpoint' placeholder='68'> degrees F space heating set point.</li> </ul> <ul>Unoccupied Mode (night setback):<li> The unit will maintain A <input type='text' id='unOccHighSetpoint'placehyolder='72'> degrees F space cooling setpoint. </li> <li> A <input type='text' id='unOccLowSetpoint'placeholder='68'> degress F space heating setpoint.</li> </ul><br><br> <strong>via Linked Scheduled:</strong> the air handling unit will exchange information with the terminal units as follows: <br><br> <ul> <li>Calculated information sent from the Air Handling Unit to the Terminal Units:</li> <li>Current Mode of operation</li> <li>Current supply air temperatur</li> <li>Current outside Air Temperature</li> </ul><br><br>Caluculated information representative of all terminal units sent from the terminal units to the air handling unit:<br><br> <ul> <li>Space Temperatur</li> <li>Setpoints, both occupied and unoocupied</li> <li>Maximum Damper Position</li> <li>Indoor air quality</li> <li>Space relative humidity (if present)</li> </ul><br><br> Based off the above information exchange, the air handling unit will determine which operation best meets the needs of the terminal units. The air handling unit will then operate as a constant volume unit, but one having setpoints representative of its designated group of terminal units. The unit will then run according to a user definable time schedule in the following modes<br><br>Occupied Mode: the unit will maintain<br><br> <ul> <li>A <input type='text' id='occCoolingSetpoint' placeholder='74'>degrees F space cooling setpoint</li> <li>A <input type='text' id='occHeatingSetpoint' placeholder='70'>degrees F space heating setpoint </li> </ul><br><br>Unoccupied Mode(night setback): The unit will maintain<br><br> <ul> <li>A <input type='text' id='unOccCoolingSetpoint' placeholder='85'>degrees F space cooling setpint</li> <li>A <input type='text' id='unOccHeatingSetpoint' placeholder='55'>degrees F space heating setpoint </li> </ul><br><br><strong>Unit Optimal Start:</strong><br>The unit will use an optimal start algorithm for morning start up. This algorithm will minimize the unoocupied warm up or cool down period while still achieving comfort conditions of scheduled occupied period.<br><br><strong>Alarms will be provided as follows</strong><br> <ul> <li>High Space Temp: If the zone temperature is greater than the cooling sepoint by a user definable amount.</li> <li>Low Space Temp: If the zone temperature is less that the heating setpoint by a user definable amount.</li> </ul><br><br><strong>Power up start Delay:</strong><br>There will be a 60 second delay in enabling the equipment on intial start up or after a power loss.<br><br><strong>Demand Limiting - Setpoint Optimization:</strong><br>To lower power consumption, the cooling and heating setpoints will automatically relax(offset up when cooling and down when heating) when the facility power consumption exceeds definable thresholds. The amount of relaxation will be user configurable. The setpoints will automatically return to their previous settings when the facility power consumption drops below the thresholds.<br><br><strong>Rnet wireless Gateway:</strong>The Rnet Wireless Gateway is designed for use within the building interior. The wireless signals can pass through a drop ceiling and up to two walls made of gypsum and steel studs with minimal degradation.<br><br>"
    },
    'WSSensorWithLinkage': {
        'isUsed': false,
        'points': {
            0: 'returnAirTemperature',
            1: 'supplyAirTemperature',
            2: 'supplyFanStatus',
            3: 'supplyFanSS',
            4: 'coolingSetpoint',
            5: 'heatingSetpoint',
            6: 'outdoorAirTemperature',
            7: 'spaceSetpointAdjust',
            8: 'spaceTemperature',
            9: 'spaceUnoccupiedOverride',
            10: 'schedule',
            11: 'highReturnAirTemperature',
            12: 'highSpaceTemperature',
            13: 'highSupplyAirTemperature',
            14: 'lowReturnAirTemperature',
            15: 'lowSpaceTemperature',
            16: 'lowSupplyAirTemperature',
            17: 'supplyFanFailure',
            18: 'supplyFanInHand',
            19: 'supplyFanRuntimeExceeded',
            20: 'sensorBatteryStrength',
            21: 'wirelessSignalStrength',
            22: 'lowSensorBattery',
            23: 'lowWirelessSignal'
        },
        'sequence': " <strong>Run Conditions:</strong> The unit will supply conditioned air to its designated zone or linked air terminals and operates a constant volume air unit. The unit will run acccording to the following user selectable modes:<br> <ul> <li>Off</li> <li> Continuously</li> <li> via BAS Command</li> <li> as Locally Scheduled</li> <li> via Link Schedule</li> </ul><br> <br><strong>Off Mode:</strong> The unit will run and all dampers, valves and fans will remain in their off position.<br> <br><strong>Continuously:</strong>The unit will run continuously in the occupied mode.<br><br> <strong> via BAS Command:</strong> The unit will be enabled and disabled via a Bacnet Binary Command, either from a remote source or locally through the software interface. Once enabled the unit will run continuously in the occupied mode. <br><br><strong> as Locally Scheduled:</strong><br> The air handling unit will operate as a constant volume unit having setpoints that represent those of a single zone unit. The unit will then run according to a user finable time schdule in the follow modes: <br> <ul>Occupied Mode: <li> the unit will maintain A <input type='text' id='occHighSetpoint'placeholder='72'> degrees F space cooling setpoint. </li> <li> A <input type='text' id='occLowSetpoint' placeholder='68'> degrees F space heating set point.</li> </ul> <ul>Unoccupied Mode (night setback):<li> The unit will maintain A <input type='text' id='unOccHighSetpoint'placehyolder='72'> degrees F space cooling setpoint. </li> <li> A <input type='text' id='unOccLowSetpoint'placeholder='68'> degress F space heating setpoint.</li> </ul><br><br> <strong>via Linked Scheduled:</strong> the air handling unit will exchange information with the terminal units as follows: <br><br> <ul> <li>Calculated information sent from the Air Handling Unit to the Terminal Units:</li> <li>Current Mode of operation</li> <li>Current supply air temperatur</li> <li>Current outside Air Temperature</li> </ul><br><br>Caluculated information representative of all terminal units sent from the terminal units to the air handling unit:<br><br> <ul> <li>Space Temperatur</li> <li>Setpoints, both occupied and unoocupied</li> <li>Maximum Damper Position</li> <li>Indoor air quality</li> <li>Space relative humidity (if present)</li> </ul><br><br> Based off the above information exchange, the air handling unit will determine which operation best meets the needs of the terminal units. The air handling unit will then operate as a constant volume unit, but one having setpoints representative of its designated group of terminal units. The unit will then run according to a user definable time schedule in the following modes<br><br>Occupied Mode: the unit will maintain<br><br> <ul> <li>A <input type='text' id='occCoolingSetpoint' placeholder='74'>degrees F space cooling setpoint</li> <li>A <input type='text' id='occHeatingSetpoint' placeholder='70'>degrees F space heating setpoint </li> </ul><br><br>Unoccupied Mode(night setback): The unit will maintain<br><br> <ul> <li>A <input type='text' id='unOccCoolingSetpoint' placeholder='85'>degrees F space cooling setpint</li> <li>A <input type='text' id='unOccHeatingSetpoint' placeholder='55'>degrees F space heating setpoint </li> </ul><br><br><strong>Unit Optimal Start:</strong><br>The unit will use an optimal start algorithm for morning start up. This algorithm will minimize the unoocupied warm up or cool down period while still achieving comfort conditions of scheduled occupied period.<br><br><strong>Alarms will be provided as follows</strong><br> <ul> <li>High Space Temp: If the zone temperature is greater than the cooling sepoint by a user definable amount.</li> <li>Low Space Temp: If the zone temperature is less that the heating setpoint by a user definable amount.</li> </ul><br><br><strong>Power up start Delay:</strong><br>There will be a 60 second delay in enabling the equipment on intial start up or after a power loss.<br><br><strong>Demand Limiting - Setpoint Optimization:</strong><br>To lower power consumption, the cooling and heating setpoints will automatically relax(offset up when cooling and down when heating) when the facility power consumption exceeds definable thresholds. The amount of relaxation will be user configurable. The setpoints will automatically return to their previous settings when the facility power consumption drops below the thresholds.<br><br><strong>Rnet wireless Gateway:</strong>The Rnet Wireless Gateway is designed for use within the building interior. The wireless signals can pass through a drop ceiling and up to two walls made of gypsum and steel studs with minimal degradation.<br><br>"
    }
};

var safties = {
    'freezeProtection': {
        'isUsed': false,
        'points': {
            0: 'freezeStat'
        },
        'sequence': '<strong>Freeze Protection:</strong>The unit will shut down and generate an alarm upon receiving a freezestat status.<br><br>'
    },
    'returnAirSmokeDetector': {
        'isUsed': false,
        'points': {
            0: 'returnAirSmokeDetector'
        },
        'sequence': '<strong>Return Air Smoke Detector:</strong>The unit will shut down and generate an alarm upon recieving a signal that smoke is present in the Return Air.<br><br>'
    },
    'supplyAirSmokeDetector': {
        'isUsed': false,
        'points': {
            0: 'supplyAirSmokeDetector'
        },
        'sequence': '<strong>Supply Air Smoke Detector:</strong>The unit will shut down and generate an alarm upon receiving a signal that smoke is present in Supply Air.<br><br>'
    }
};

var smokeControl = {
    'fireShutdown': {
        'isUsed': false,
        'points': {
            0: 'fireShutdown'
        },
        'sequence': '<strong>Fire Shutdown:</strong> K1 closed(on), K2 closed(on)<br><br> The Unit will shut down and generate and alarm upon receiving a fire shutdown status.<br><br>'
    },
    'evacuation': {
        'isUsed': false,
        'points': {
            0: 'smokeEvacuation',
            1: 'smokeRelayK1',
            2: 'smokeRelayK2'
        },
        'sequence': '<strong>Smoke Evacuation:</strong>K1 Open(off), K2 Closed(on)<br><br>Upon receiving a smoke evacuation status signal the unit will:<br><br><ul>Shut down the supply fan</ul><ul>And start the return Fan</ul><ul>AND close the outdoor and return air dampers</ul><ul>AND open the exhaust air damper</ul><br><br> Alarm will be provided as follows:<br><ul>Smoke Evacuation Alarm: Unit smoke evacuation input is on and unit is in area smoke evacuation mode.<br><br>'
    },
    'pressurization': {
        'isUsed': false,
        'points': {
            0: 'smokePressurization',
            1: 'smokeRelayK1',
            2: 'smokeRelayK2'
        },
        'sequence': '<strong>Smoke Pressurization:</strong> K1 Closed(on), K2 Open(off)<br><br> Upon receiving a smoke pressurization status signal, the unit will:<br><br><ul>Start the supply fan</ul><ul>AND stop the return fan</ul><ul>AND open the outdoor air dampers</ul><ul>AND close the return and exhaust air damper</ul><br><br>Alarm will be provided as follows:<br><ul>Smoke Pressurization Alarm: Unit smoke pressurization input is on and unit is in area pressurization mode.<br><br>'
    },
    'purge': {
        'isUsed': false,
        'points': {
            0: 'smokePurge',
            1: 'smokeRelayK1',
            2: 'smokeRelayK2'
        },
        'sequence': '<strong>Smoke Purge:</strong>K1 Open(off), K2 Open(off)<br><br> Upon receiving a smoke purge signal, the unit will:<br><br><ul>Start the supply fan</ul><ul>And start the return fan</ul><ul>AND open the outdoor and exhaust air dampers</ul><ul>AND close the return damper</ul><br><br>Alarm will be provided as follows:<br><ul>Smoke Purge Alarm: Unit smoke purge input is on and unit is in area smoke purge mode.<br><br>'

    }
};

var outdoorAirTemp = {
    'physicalInput': {
        'isUsed': false,
        'points': {
            0: {
                0: 'outdoorAirTemperature',
                1: 'AI'
            }
        },
        'sequence': '<strong>Outdoor Air Conditions:</strong>The controller will monitor outdoor air temperatur on a continual basis. These values will be made available to the system at all times.<br><br>'
    },
    'networkInput': {
        'isUsed': false,
        'points': {
            0: {
                0: 'outdoorAirTemperature',
                1: 'AV'
            }
        },
        'sequence': '<strong>Outdoor Air Conditions:</strong>The controller will monitor outdoor air temperatur on a continual basis. These values will be made available to the system at all times.<br><br>'
    }
};

var supplyFan = {
    'blowThrough': {
        'isUsed': false,
        'points': {},
        'sequence': '<strong>Supply Fan:</strong>The supply fan will run anytime the unit is commanded to run, unless shutdown on safeties.  To prevent short cycling, the supply fan will have a user definable minimum runtime.<br><br>Alarms will be provided as follows:<br><ul>Supply Fan Failure: Commanded on but the status is off</ul><br><ul>Supply Fan in Hand:Commanded off, but the status in on</ul><br><ul>Supply Fan Runtime Exceeded: Status runtime exceeds a user definable limit.</ul><br><br>'
    },
    'drawThrough': {
        'isUsed': false,
        'points': {},
        'sequence': '<strong>Supply Fan:</strong>The supply fan will run anytime the unit is commanded to run, unless shutdown on safeties.  To prevent short cycling, the supply fan will have a user definable minimum runtime.<br><br>Alarms will be provided as follows:<br><ul>Supply Fan Failure: Commanded on but the status is off</ul><br><ul>Supply Fan in Hand:Commanded off, but the status in on</ul><br><ul>Supply Fan Runtime Exceeded: Status runtime exceeds a user definable limit.</ul><br><br>'
    }
};

var vfd = {
    'vfd': {
        'isUsed': false,
        'points': {
            0: 'VFDAO'
        },
        'sequence': '<strong>Single Zone VAV control:</strong> The purpose of this algorithm is to reduce fan energy consumption in a single zone application by adjusting the fan speed to meet the cooling or heating capacity necessary to meet the space load requirements.  This algorithm is applicable to all types of heating and cooling except electric heat.<br><br>The algorithm monitors the supply air temperature of the unit and will adjust the fan speed appropriately to maintain the desired cooling SAT setpoint in cooling mode or the desired heating SAT setpoint in heating mode. When no heating or cooling is active, the fan will operate at a user configurable minimum fan speed to save energy while maintaining proper ventilation.  When cooling or heating becomes active, the algorithm will increase the fan speed as necessary to main teh appropriate SAT setpoint.<br><br> To maintain proper ventilation rates, the economizer minimum position will also be modulated in order to maintain constant ventilation over the entire operating range of the fan.  A second low speed economizer minimum position will be added and used when the fan is operating at its lowest fan speed.  The existing economizer minimum position will be used when the fan operates at its highest operating speed. A calulation will be preformed to compute the exact minimum economizer position to be used at any fan speed between minimum and maximum.<br><br> A fan speed override will be provided to prevent cold air dumping during conditions when the unit is operating in a fan only mode and the OAT is very cold, causing the SAT to fall below the ventilation SAT setpoint (due to a large percentage of OA being introduced at low fan speeds). The fan speed will increase as required up to the maximum fan speed in order to maintain the SAT at the ventilation SAT setpoint any time heating or cooling is inactive.<br><br> In the cases of the above, when these heat types are active, the fan will override the vairable speed function and operate at the maximum fan speed.<br><br>'
    }
};

var returnFan = {
    'none': {
        'isUsed': true,
        'points': {},
        'sequence': ''
    },
    'onOff': {
        'isUsed': false,
        'points': {
            0: 'returnFanStatus',
            1: 'returnFanSS',
            2: 'returnFanFailure',
            3: 'returnFanInHand',
            4: 'returnFanRuntimeExceeded'
        }
    },
    'sequence': '<strong>Return Fan:</strong>The return fan will run whenever the supply fan runs.<br><br>Alarms will be provided as follows:<br><ul>Return Fan Failure: Commanded on, but the status if off</ul><br><ul>Return Fan in Hand: Commanded Off, but the status is on</ul><br><ul>Return Fan Runtime Exceeded: Status runtime exceeds a user definable limit.</ul><br><br>'
};

var exhaustFan = {
    'none': {
        'isUsed': false
    },
    'onOff': {
        'isUsed': false,
        'points': {
            0: 'exhaustFanStatus',
            1: 'exhaustFanSS',
            2: 'exhaustFanFailure',
            3: 'exhaustFanInHand',
            4: 'exhaustFanRuntimeExceeded'
        },
        'sequence': '<strong>Exhuast Fan:</strong>The Exhaust Fan will run whenever the supply fan runs.<br><br>Alarms will be provided as follows:<br><ul>Exhaust Fan Failure: Commanded on but the status is off</ul><br><ul>Exhaust Fan in Hand: Commanded off, but status is on.</ul><br><ul>Exhaust Fan Runtime Exceeded: Status runtime exceeds a user definable limit.</ul><br><br>'
    }
};

var preHeating = {
    'none': {
        'isUsed': true,
        'points': {}
    },
    'electricStaging': {
        'isUsed': false,
        'points': {
            0: 'preheatDischargeAirTemperature',
            1: 'preheaingOutput',
            2: 'preheatDischargeAirTemperatureSetpoint',
            3: 'highPreheatDischargeAirTemperature',
            4: 'lowPreheatDischargeAirTemperature',
            'stages': null,
            'sequence':  "<strong>Electric Preheating Stages - AP to Stage Sequencer:</strong>The controller will measure the preheat discharge air temperature and stage the preheating through an external stage sequencer to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating will be enabled whenever the supply fan status is on.<br><br> <ul>The preheating stages will run for freeze protection whenever:<br><br> <li>Preheat air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F.</li> <li>AND the supply fan status is on.</li> </ul><br><br>"
        }
    },
    'SCRElectric': {
        'isUsed': false,
        'points': {
            0: 'preheatDischargeAirTemperature',
            1: 'SCRElectric',
            2: 'preheatDischargeAirTemperatureSetpoint',
            3: 'highPreheatDischargeAirTemperatureSetpoint',
            4: 'lowPreheatDischargeAirTemperatureSetpoint'
        },
        'sequence': "<strong>SCR Electric Heat:</strong>The controller will measure the preheat discharge air temperature and modulate the output to the SCR control interface to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating will be enabled whenever the supply fan status is on.<br><br> <ul>The preheating stages will run for freeze protection whenever:<br><br> <li>Mixed air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F.</li><br> <li>AND the supply fan status is on.</li> </ul><br><br>"
    },
    'hotWaterModulating': {
        'isUsed': false,
        'points': {
            0: 'preheatDischargeAirTemperature',
            1: 'preheatingValve',
            2: 'preheatDischargeAirTemperatureSetpoint',
            3: 'highPreheatDischargeAirTemperature',
            4: 'lowPreheatDischargeAirTemperature'
        },
        'sequence': "<strong>Preheating Coil Valve:</strong>The controller will measure the preheat discharge air temperature and modulate the preheating coil valve to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating stages will run for freeze protection whenever preheat air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F or if the freezestat is on and present.<br><br>"
    },
    'hotWaterFaceBypass': {
        'isUsed': false,
        'points': {
            0: 'preheatDischargeAirTemperature',
            1: 'preheatingIntegralFaceAndBypassDamper',
            2: 'preheatingValve',
            3: 'preheatDischargeAirTemperatureSetpoint',
            4: 'highPreheatDischargeAirTemperature',
            5: 'lowPreheatDischargeAirTemperature'
        },
        'sequence': "<strong>Preheating Integral Face and Bypass Coil:</strong>The controller will measure the preheat discharge air temperature and modulate the preheating integral bypass damper and open the coil valve to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating coil steam valve will open for freeze protection whenever preheat air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F or if the freezestat is on and present.<br><br>"
    },
    'steamModulating': {
        'isUsed': false,
        'points': {
            0: 'preheatingDischargeAirTemperature',
            1: 'preheatingSteamValve',
            2: 'preheatDischargeAirTemperatureSetpoint',
            3: 'highPreheatDischargeAirTemperature',
            4: 'lowPreheatDischargeAirTemperature'
        },
        'sequence': "Preheating Coil Valve:</strong>The controller will measure the preheat discharge air temperature and modulate the preheating coil valve to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating stages will run for freeze protection whenever preheat air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F or if the freezestat is on and present.<br><br>"
    },
    'steamFaceBypass': {
        'isUsed': false,
        'points': {
            0: 'preheatDischargeAirTemperature',
            1: 'preheatingIntegralFaceAndBypassDampers',
            2: 'preheatingValve',
            3: 'preheatDischargeAirTemperatureSetpoint',
            4: 'highPreheatDischargeAirTemperature',
            5: 'lowPreheatDischargeAirTemperature'
        },
        'sequence': "<strong>Preheating Integral Face and Bypass Coil:</strong>The controller will measure the preheat discharge air temperature and modulate the preheating integral bypass damper and open the coil valve to maintain its setpoint <input type='text' id='preheatTempSetpoint' placeholder='50'> degrees F. The preheating coil steam valve will open for freeze protection whenever preheat air temperature drops from <input type='text' id='preheatDeadBandHigh' placeholder='40'> degrees F to <input type='text' id='preheatDeadbandLow' placeholder='35'> degrees F or if the freezestat is on and present.<br><br> "
    }
};

var heating = {
    'none': {
        'isUsed': true,
        'points': {}
    },
    'electricStaging': {
        'isUsed': false,
        'points': {
            0: 'heatingStage',
            'stages': null
        },
        'sequence': "<strong>Electric Heating Stages:</strong>The controller will measure the supply air temperature and stage the heating to maintain its heating setpoint. to prevent short cycling there will be a user definable delay between stages, and each stage will have a user definable minimum runtime.<br><br> <ul>The heating will be enabled whenever: <li>Outside aire temperature is less than <input type='text' id='minOATSetpoin' placeholder='65'> degrees F.</li> <li>AND the supply air temperature is below heating setpoint.</li> <li>AND the cooling (if present) is not active.</li> <li>AND the supply fan status is on.</li> </ul><br>"
    },
    'gasStaging': {
        'isUsed': false,
        'points': {
            'stages': null
        },
        'sequence': 'this is the sequence'
    },
    'electricStagingAO': {
        'isUsed': false,
        'points': {
            0: 'heatingOutput'
        },
        'sequence': "<strong>Electric Heating Stages - AO to Stage Sequencer:</strong>The controller will measure the supply air temperature and stage the heating through an external stage sequencer to maintain its heating setpoint. to prevent short cycling there will be a user definable delay between stages, and each stage will have a user definable minimum runtime.<br><br> <ul>The heating will be enabled whenever: <li>Outside aire temperature is less than <input type='text' id='minOATSetpoin' placeholder='65'> degrees F.</li> <li>AND the supply air temperature is below heating setpoint.</li> <li>AND the cooling (if present) is not active.</li> <li>AND the supply fan status is on.</li> </ul><br><br>"
    },
    'SCRElectric': {
        'isUsed': false,
        'points': {
            0: 'SCRElectric'
        },
        'sequence': "<strong>SCR Electric Heat:</strong>The controller will compare the space temperature to the space temperature setpoint, and compute a target Supply Air Temperature setpoint in order to satisfy the required Space Temperature conditions.The output to the SCR control interface will be modulated to main the target Supply Air setpoint. Th supply air temperature setpoint will be reset as needed to satisfy Space conditions.<br><br><ul>The heating will be enabled whenever:<br><br> <li>Outside aire temperature is less than <input type='text' id='minOATSetpoin' placeholder='65'> degrees F.</li><br> <li>AND the supply air temperature is below heating setpoint.</li> <li>AND the cooling (if present) is not active.</li><br> <li>AND the supply fan status is on.</li></ul><br><br>"
    },
    'hotWaterModulating': {
        'isUsed': false,
        'points': {
            0: 'heatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the supply air temperature and modulate the heating coil valve to maintain its setpoint. The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.<br><br> <ul>The heating will be enabled whenever:<br><br> <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li><br> <li>AND the space temperature is below heating setpoint.</li><br> <li>AND the supply fan status is on.</li><br> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'hotWaterModulatingCoilDeltaT': {
        'isUsed': false,
        'points': {
            0: 'heatingCoilSupplyTemperature',
            1: 'heatingCoilReturnTemperature',
            2: 'heatingVavle'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the supply air temperature and modulate the heating coil valve to maintain its setpoint. The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.<br><br> <ul>The heating will be enabled whenever:<br><br> <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br><strong>Delta T Algorithm</strong>:<br>The purpose of this algorithm is to always maintain at least the manufacturers desgin coil delta T so as not to increase water flow above the coils design flow requirement. Under full load conditions, the water valve will be modulated to maintain the desired leaving supply air temperature if a dual loop (master/ submaster) is used or if a single loop is used, insure that the space temperature meets the heating setpoint. This enhancement insures that the valve is never opened more than the amount necessary to provide full heating capacity from the coil and provide the design water temperature differential between the coil inlet and outlet, thus preventing excessive water flow through the coil.<br><br>The algorithm will monitor a leaving water temperature sensor on the coil and also utilize either an entering water temperature sensor or a network value from a boiler (and then add a fixed, user configurable constant to represent the heat gain in the water loop pipping). The difference between these two values (sensor input) will be compared to a user adjustable limit (default 35 degF with a range of 10 to 50 degF setpoint). A PID will be used to generate an output that will feed a high limit on the actual valve position to maintian the water flow so as to devlop the required minimum delta T across the heating coil."
    },
    'hotWaterExternalFaceAndBypass': {
        'isUsed': false,
        'points': {
            0: 'heatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the Space temperature and open the heating coil valve in sequence with the face and bypass dampers to maintain its Heating setpoint.<br><br> <ul>The heating will be enabled whenever:<br><br> <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>"
    },
    'hotWaterInternalFaceAndBypass': {
        'isUsed': false,
        'points': {
            0: 'heatingVavle'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the Space temperature and open the heating coil valve in sequence with the face and bypass dampers to maintain its Heating setpoint.<br><br><ul>The heating will be enabled whenever:<br><br> <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li></ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'hotWaterIntegral': {
        'isUsed': false,
        'points': {
            0: 'heatingIntegralFaceAndBypassDamper',
            1: 'heatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the supply air temperature and modulate the heating integral damper and open the coil valve to maintain its Heating setpoint. The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.<br><br> <ul>The heating will be enabled whenever: <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'steamModulating': {
        'isUsed': false,
        'points': {
            0: 'steamHeatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the supply air temperature and open the coil valve to maintain its Heating setpoint. The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.<br><br> <ul>The heating will be enabled whenever: <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'steamExternalFaceAndBypass': {
        'isUsed': false,
        'points': {
            0: 'steamHeatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the Space temperature and open the heating coil valve in sequence with the face and bypass dampers to maintain its Heating setpoint.<br><br> <ul>The heating will be enabled whenever: <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'steamInternalFaceAndBypass': {
        'isUsed': false,
        'points': {
            0: 'steamHeatingValve'
        },
        'sequence': "<strong>Heating Coil Valve:</strong>The controller will measure the Space temperature and open the heating coil valve in sequence with the face and bypass dampers to maintain its Heating setpoint.<br><br> <ul>The heating will be enabled whenever: <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active.</li> </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    },
    'steamIntegral': {
        'isUsed': false,
        'points': {
            0: 'steamHeatingValve',
            1: 'heatingIntegralFaceAndBypassDamper'
        },
        'sequence': "<strong>Heating Coil Valve:/strong>The controller will measure the supply air temperature and modulate the heating integral damper and open the coil valve to maintain its Heating setpoint. The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.<br><br> <ul>The heating will be enabled whenever: <li>Outside air temperature is less than <input type='text' id='minOATSetpoint' placeholder='65'> degress F.</li> <li>AND the space temperature is below heating setpoint.</li> <li>AND the supply fan status is on.</li> <li>AND the cooling (if present) is not active. </ul><br><br>The heating coil valve will open whenever the freezestat (if present) is on.<br><br>"
    }
};

var cooling = {
    'none': {
        'isUsed': true
    },
    'dXCooling': {
        'isUsed': false,
        'points': {
            0: 'compressorStage',
            1: 'compressorRunTimeExceeded',
            'stages': null
        },
        'sequence': "<strong>Cooling Stages:</strong><br>The controller will measure the space temperature and stage the cooling to maintain its cooling setpoint. To prevent short cycling, there will be a user definable delay between stages, and each stage will have a user definable minimum runtime.<br><br> <ul>The cooling will be enabled whenever: <li>Outside air temperature is greater than <input type='text\' id='coolingSetpoint' placeholder='60'> degree F </li> <li>AND the economizer (if present)is disabled or fully open</li> <li>AND the space temperature is above cooling setpoint</li> <li>AND the supply fan status is on</li> <li>AND the heating (if present) is not active</li> </ul><br><br>"
    },
    'chilledWaterModulating': {
        'isUsed': false,
        'points': {
            0: 'coolingVavle'
        },
        'sequence': "<strong>Cooling Coil Valve:</strong><br>The controller will measure the supply air temperature and modulate the cooling coil valve to maintain its cooling setpoint. The supply air temperature setoint will be reset downards as the space temperature rises above its cooling setpoint.<br><br> <ul>The cooling will be enabled whenever: <li>Outside air temperature is greater than <input type='text' id='coolingSetpoint' placeholder='60'> degree F</li>  <li>AND the economizer (if present)is disabled or fully open</li> <li>AND the supply fan status is on</li> < <li>AND the heating (if present) is not active</li> </ul><br><br>The cooling coil valve will open to <input type='text' id='minCoolingCoilAnalog' placeholder='50'> percent whenever the freezestat (if present) is on<br><br>"
    },
    'chilledWaterModulatingCoilDeltaT': {
        'isUsed': false,
        'points': {
            0: 'coolingValve',
            1: 'coolingCoilSupplyWaterTemperature',
            2: 'coolingCoilReturnWaterTemperature'
        },
        'sequence': "<strong>Cooling Coil Valve:</strong><br>The controller will measure the supply air temperature and modulate the cooling coil valve to maintain its cooling setpoint. The supply air temperature setoint will be reset downards as the space temperature rises above its cooling setpoint.<br><br> <ul>The cooling will be enabled whenever: <li>Outside air temperature is greater than <input type='text' id='coolingSetpoint' placeholder='60'> degree F</li>  <li>AND the economizer (if present)is disabled or fully open</li> <li>AND the space temperature is above cooling setpoint</li> <li>AND the supply fan status is on</li> <li>AND the heating (if present) is not active</li> </ul><br><br>The cooling coil valve will open to <input type='text' id='minCoolingCoilAnalog' placeholder='50'> percent whenever the freezestat (if present) is on<br><br><strong>Delta T Algorithm:</strong>The purpose of this algorithm is to always maintain at least the manufacturers design coil delta T so as not to increase water flow above the coils design flow requirement. Under full load condition, the water valve will be modulated to maintain the desired leaving supply air temperature if a dual loop (master / submaster) is used or if a single loop is used, insure that the space temperature meets the cooling setpoint. THis enhancement insures that the valve is never opened more than the amount necessary to provide full cooling capacity from the coil and provide the design water temperature differential between the coil inlet and outlet, thus preventing excessive water flow through the coil.<br><br>The algorithm will monitor a leaving water temperature sensor on the coil and also utilize either an entering water temperature sensor or a network value from a chiller plant (and then add a fixed, user configurable constant to represent the heat gain in the water loop piping). The difference between these two values (sensor input) will be compared to a user adjustable limit (default 12 degF with a range of 5 to 25 degF setpoint). A PID will be used to generate an output that will feed a high limit on the actual valve poisition to maintain the water flow so as to develop the required minimum delta T across the cooling coil.<br><br>"
    },
    'chilledWaterExternalFaceBypass': {
        'isUsed': false,
        'points': {
            0: 'coolingValve'
        },
        'sequence': " <strong>Cooling Coil Valve:</strong><br>The controller will measure the space temperature and open the cooling coil valve in sequence with the face and bypass dampers to maintain its cooling setpoint.<br><br><ul>The cooling will be enabled whenever: <li>Outside air temperature is greater than <input type='text' id='coolingSetpoint' placeholder='60'> degree F</li>  <li>AND the economizer (if present)is disabled or fully open</li> <li>AND the space temperature is above cooling setpoint</li> <li>AND the supply fan status is on</li> <li>AND the heating (if present) is not active</li></ul><br><br>The cooling coil valve will open whenever the freezestat (if present) is on<br><br>"
    },
    'chilledWaterInternalFaceBypass': {
        'isUsed': false,
        'points': {
            0: 'coolingValve'
        },
        'sequence': " <strong>Cooling Coil Valve:</strong><br>The controller will measure the space temperature and open the cooling coil valve in sequence with the face and bypass dampers to maintain its cooling setpoint.<br><br><ul>The cooling will be enabled whenever: <li>Outside air temperature is greater than <input type='text' id='coolingSetpoint' placeholder='60'> degree F</li>  <li>AND the economizer (if present)is disabled or fully open</li> <li>AND the space temperature is above cooling setpoint</li> <li>AND the supply fan status is on</li> <li>AND the heating (if present) is not active</li></ul><br><br>The cooling coil valve will open whenever the freezestat (if present) is on<br><br> "
    }
};

var mixedAirDamper = {
    'none': {
        'isUsed': true
    },
    'economizerOAEnthalpySwitch': {
        'isUsed': false,
        'points': {
            0: 'mixedAirTemperature',
            1: 'mixedAirDampers',
            2: 'outsideAirEnthalpySwitch',
            3: 'highMixedAirTemperature',
            4: 'lowMixedAirTemperature'
        },
        'sequence': "<strong>Economizer:</strong><br>The controller will measure the mixed air temperature and modulate the economizer dampers in sequence to maintain a setpoint <input type='number' id='economizerDeadbandSetpoint' placeholder='68'> degrees F less than the supply air temperature setpoint. The outside air dampers will maintain a minimum adustable position of <input type='number' id='minEconomizerPos' placeholder='68'>percent whenever occupied.<br><br> <ul> The economizer will be enabled whenever: <li>Outside air temper is less than <input type='number' id='minEconomizerOAT' placeholder='68'> degress F</li> <li>AND the outside air enthalpy is less than the enthalpy switch setpoint.</li> <li>AND not in heating mode</li> <li>AND the supply fan status is on.</li> </ul> <br><br> <ul>The Economizer will close whenever: <li>Mixed air temperature drops from <input type='number' id='highEconomizerDeadbandTemp' placeholder='68'> degrees F to <input type='number' id='lowEconomizerDeadbandTemp' placeholder='68'> degrees F</li> <li>Or on loss of supply fan status</li> <li>Or freezestat (if present) is on.</li> </ul><br><br>The economizer\'s opening rate will be limited to 5% per miute when the outside air temperature is less than 45 deg F.<br><br>The outside and exhaust air dampers will close and return air damper will open when the unit is off. If optimal Start up is available, the mixed air damper will operate as described in the occupied mode except that the outside air damper will modulate to fully closed<br><br><strong>Nighttime Free Cooling Mode:</strong><br>The nighttime free cooling mode will operate only during unoccupied hours. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the space occupied cooling setpoint. This mode will be enabled via a user selectable swithc.<br><br><strong>Night Purge Mode:</strong><br>The night purge mode will begin at a preset time prior to scheduled occupancy time and operate during optimal start. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the optimal start space cooling setpoint, regardless of outside air temperature. This mode will be enabled via a user selectable switch.<br><br>"
    },
    'economizerOAEnthalpySensor': {
        'isUsed': false,
        'points': {
            0: 'mixedAirTemperature',
            1: 'mixedAirDampers',
            2: 'outdoorRelativeHumiditiy',
            3: 'highMixedAirTemperature',
            4: 'lowMixedAirTemperature'
        },
        'sequence': "<strong>Economizer:</strong><br>The controller will measure the mixed air temperature and modulate the economizer dampers in sequence to maintain a setpoint <input type='number' id='economizerDeadbandSetpoint' placeholder='68'> degrees F less than the supply air temperature setpoint. The outside air dampers will maintain a minimum adustable position of <input type='number' id='minEconomizerPos' placeholder='68'>percent whenever occupied.<br><br> <ul> The economizer will be enabled whenever: <li>Outside air temper is less than <input type='number' id='minEconomizerOAT' placeholder='68'> degress F</li> <li>AND the outside air enthalpy is less than the enthalpy switch setpoint.</li> <li>AND not in heating mode</li> <li>AND the supply fan status is on.</li> </ul> <br><br> <ul>The Economizer will close whenever: <li>Mixed air temperature drops from <input type='number' id='highEconomizerDeadbandTemp' placeholder='68'> degrees F to <input type='number' id='lowEconomizerDeadbandTemp' placeholder='68'> degrees F</li> <li>Or on loss of supply fan status</li> <li>Or freezestat (if present) is on.</li> </ul><br><br>The economizer\'s opening rate will be limited to 5% per miute when the outside air temperature is less than 45 deg F.<br><br>The outside and exhaust air dampers will close and return air damper will open when the unit is off. If optimal Start up is available, the mixed air damper will operate as described in the occupied mode except that the outside air damper will modulate to fully closed<br><br><strong>Nighttime Free Cooling Mode:</strong><br>The nighttime free cooling mode will operate only during unoccupied hours. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the space occupied cooling setpoint. This mode will be enabled via a user selectable swithc.<br><br><strong>Night Purge Mode:</strong><br>The night purge mode will begin at a preset time prior to scheduled occupancy time and operate during optimal start. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the optimal start space cooling setpoint, regardless of outside air temperature. This mode will be enabled via a user selectable switch.<br><br>"
    },
    'economizerOADifferentialEnthalpy': {
        'isUsed': false,
        'points': {
            0: 'mixedAirTemperature',
            1: 'outdoorRelativeHumidiity',
            2: 'spaceRelativeHumidity',
            3: 'mixedAirDampers',
            4: 'highMixedAirTemperature',
            5: 'lowMixedAirTemperature',
            6: 'highSpaceRelativeHumidity',
            7: 'lowSpaceRelativeHumidity'
        },
        'sequence': "<strong>Economizer:</strong><br>The controller will measure the mixed air temperature and modulate the economizer dampers in sequence to maintain a setpoint <input type='number' id='economizerDeadbandSetpoint' placeholder='68'> degrees F less than the supply air temperature setpoint. The outside air dampers will maintain a minimum adustable position of <input type='number' id='minEconomizerPos' placeholder='68'>percent whenever occupied.<br><br> <ul> The economizer will be enabled whenever: <li>Outside air temper is less than <input type='number' id='minEconomizerOAT' placeholder='68'> degress F</li> <li>AND the outside air enthalpy is less than the enthalpy switch setpoint.</li> <li>AND not in heating mode</li> <li>AND the supply fan status is on.</li> </ul> <br><br> <ul>The Economizer will close whenever: <li>Mixed air temperature drops from <input type='number' id='highEconomizerDeadbandTemp' placeholder='68'> degrees F to <input type='number' id='lowEconomizerDeadbandTemp' placeholder='68'> degrees F</li> <li>Or on loss of supply fan status</li> <li>Or freezestat (if present) is on.</li> </ul><br><br>The economizer\'s opening rate will be limited to 5% per miute when the outside air temperature is less than 45 deg F.<br><br>The outside and exhaust air dampers will close and return air damper will open when the unit is off. If optimal Start up is available, the mixed air damper will operate as described in the occupied mode except that the outside air damper will modulate to fully closed<br><br><strong>Nighttime Free Cooling Mode:</strong><br>The nighttime free cooling mode will operate only during unoccupied hours. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the space occupied cooling setpoint. This mode will be enabled via a user selectable swithc.<br><br><strong>Night Purge Mode:</strong><br>The night purge mode will begin at a preset time prior to scheduled occupancy time and operate during optimal start. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the optimal start space cooling setpoint, regardless of outside air temperature. This mode will be enabled via a user selectable switch.<br><br>"
    },
    'economizerOADryBulb': {
        'isUsed': false,
        'points': {
            0: 'mixedAirTemperature',
            1: 'mixedAirDampers',
            2: 'highMixedAirTemperature',
            3: 'lowMixedAirTemperature'
        },
        'sequence': "<strong>Economizer:</strong><br>The controller will measure the mixed air temperature and modulate the economizer dampers in sequence to maintain a setpoint <input type='number' id='economizerDeadbandSetpoint' placeholder='68'> degrees F less than the supply air temperature setpoint. The outside air dampers will maintain a minimum adustable position of <input type='number' id='minEconomizerPos' placeholder='68'>percent whenever occupied.<br><br> <ul> The economizer will be enabled whenever: <li>Outside air temper is less than <input type='number' id='minEconomizerOAT' placeholder='68'> degress F</li> <li>AND the outside air enthalpy is less than the enthalpy switch setpoint.</li> <li>AND not in heating mode</li> <li>AND the supply fan status is on.</li> </ul> <br><br> <ul>The Economizer will close whenever: <li>Mixed air temperature drops from <input type='number' id='highEconomizerDeadbandTemp' placeholder='68'> degrees F to <input type='number' id='lowEconomizerDeadbandTemp' placeholder='68'> degrees F</li> <li>Or on loss of supply fan status</li> <li>Or freezestat (if present) is on.</li> </ul><br><br>The economizer\'s opening rate will be limited to 5% per miute when the outside air temperature is less than 45 deg F.<br><br>The outside and exhaust air dampers will close and return air damper will open when the unit is off. If optimal Start up is available, the mixed air damper will operate as described in the occupied mode except that the outside air damper will modulate to fully closed<br><br><strong>Nighttime Free Cooling Mode:</strong><br>The nighttime free cooling mode will operate only during unoccupied hours. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the space occupied cooling setpoint. This mode will be enabled via a user selectable swithc.<br><br><strong>Night Purge Mode:</strong><br>The night purge mode will begin at a preset time prior to scheduled occupancy time and operate during optimal start. When enabled, the controller will measure the space temperature and modulate the economizer to maintain the optimal start space cooling setpoint, regardless of outside air temperature. This mode will be enabled via a user selectable switch.<br><br>"
    }
};

var minOutsideAir = {
    'none': {
        'isUsed': true
    },
    'differentialCO2': {
        'isUsed': false,
        'points': {
            0: 'outsideAirCO2Concentration',
            1: 'returnAirCO2Concentration',
            2: 'CO2ConcentrationDifferentialSetpoint',
            3: 'highReturnAirCO2Concentration',
        },
        'sequence': '<strong>Minimum Outside Air Ventilation - Carbon Dioxide (CO2) Control:</strong><br>When in the occupied mode, the controller will measure the differeence between return air and outside air CO2 levels.  The controller will then modulate the outside air dampers open on rising return air CO2 concentrations, overriding normal damper operation to maintain return air CO2 concentrations no more than <input type=\'number\' id=\'maxReturnAirCO2\'> ppm above outside air CO2 levels.<br><br>'
    },
    'returnSpaceCO2': {
        'isUsed': false,
        'points': {
            1: 'spaceCO2Concentration',
            2: 'spaceCO2ConcentrationSetpoint',
            3: 'highSpaceCO2Concentration'
        },
        'sequence': '<strong>Minimum Outside Air Ventilation - Carbon Dioxide (CO2) Control:</strong><br>When in the occupied mode, the controller will measure the space CO2 levels and modulate the outside air dampers open on rising CO2 concentrations, overiding normal damper operation to maintain a CO2 setpoint of no more than <input type=\'number\' id=\'minOACO2\'> ppm.<br><br>'
    }
};

var humidityControl = {
    'dehumidification': {
        'isUsed': false,
        'points': {
            0: 'dehumidificationSetpoint',
            1: 'spaceRelativeHumidity',
            2: 'highSpaceRelativeHumidity',
            3: 'lowSpaceRelativeHumidity'
        },
        'sequence': '<strong>Dehumidification:</strong><br><strong>When Heat is NOT operating:</strong> Dehumidification will be enabled whenever the supply fan is on and the temperature is greater than the heating setpoint.  The controller will measure the return air or space humidity and calculate a cooling coil output to maintain the humitity at or below <input type=\'number\' id=\'relativeHumiditySetpoint\' relative humidity.  The dehumidification output is compared to the temperature control based cooling coil output, with the greater being sent to the valve.  Once enabled, dehumidification will disable when the temperature is less than the heating setpoint minus 2 degress.<br><br><strong>When Heat is operating:<strong>Dehumidification will be enabled whenever the supply fan status is on and the temperature is greater than the heating setpoint + 1. The controller will measure the return air or space humiditiy and calculate a cooling coil output to maintain the humidity at or below <input type=\'number\' id=\'relativeHumiditySetpoint2\'> relative humidity.  The dehumidificaiton output is compared to the temperature control based cooling coil output, with the greater being sent to the valve.  Once enabled, dehumidification will disable when the temperature is less than the heating setpoint.<br><br>'
    }
};

var humidifier = {
    'none': {
        'isUsed': true
    },
    'SS': {
        'isUsed': false,
        'points': {
            0: 'spaceRelativeHumidity',
            1: 'highDuctRelativeHumidity',
            2: 'humidifierEnable',
            3: 'humidificationSetpoint',
            4: 'highSpaceRelativeHumidity',
            5: 'lowSpaceRelativeHumidity'
        },
        'sequence': '<strong>Humidifier Control:</strong><br>The controller will measure the space relative humidity and enable the two position humidifier output to maintain a setpoint of <input type=\'number\' id=\'relativeHumditiySetpoint3\'> relative humidity. The humidifier output will be disabled whenever the humidity rises above the setpoint plus 5%.  The humdifier will be allowed to operate whenever the supply fan status is on.  The humidifier will turn off on loss of supply fan status.<br><br>'
    },
    'sSAndModulation': {
        'isUsed': false,
        'points': {
            0: 'supplyAirHumidity',
            1: 'spaceRelativeHumidity',
            2: 'humidifierControl',
            3: 'highDuctRelativeHumidity',
            4: 'humidifierEnable',
            5: 'humidificationSetpoint',
            6: 'maximumSupplyAirHumidity',
            7: 'netSupplyAirHumidity',
            8: 'highSpaceRelativeHumidity',
            9: 'lowSpaceRealtiveHumdity'
        },
        'sequence': '<strong>Modulating Humidifier Control:</strong><br> The controller will measure the space relative humidity and modulate output humidifier output to maintain a setpoint of <input type=\'number\' id=\'relativeHumiditySetpoint4\'> relative humidiity.  The modulating humidifier output will be upper limited by the Maximum SA Humidity setpoint of <input type=\'number\' id=\'maxRelativeHumiditySetpoint\'> relative humidity (permissable range of 50% to 90%) and/or the Hi Duct Relative Humidity swith as well as an adjustable Humidifier PID High Limit Clamp of <input type=\'number\' id=\'humidifierHighLimitClamp\'> percent. Optional Humidifier Enable output is turned ON when the humidification PID is greater that 0%(fixed).  The humidifier will be allowed to operate whenever the supply fan is on. The humidifier will turn off on loss of supply fan status.<br><br>  '
    }
};

var RARH = {
    'RARH': {
        'isUsed': false,
        'points': {
            0: 'returnAirRelativeHumidityInput',
            1: 'returnAirRelativeHumidityValue'
        },
        'sequence': '<strong>Return Air Relative Humidity (RARH):<strong><br>The controller will measure return air relative humidity percentage levels.<br><br>'
    }
};

var OARH = {
    'OARH': {
        'isUsed': false,
        'points': {
            0: 'outdoorAirRelativeHumidityInput',
            1: 'outdoorAirRelativeHumidityValue'
        },
        'sequence': '<strong>Outside Air Relative Humidity(OARH):<strong><br>The controller will measure outside air relative humidity percentage levels.<br><br>'
    }
};

var faceAndBypassDampers = {
    'none': {
        'isUsed': true
    },
    'external': {
        'isUsed': false,
        'points': {
            0: 'faceAndBypassDamper'
        },
        'sequence': '<strong>Face and Bypass Dampers Control:</strong><br>The unit will maintain space heating and cooling setpoints (if equipped with associated heating and cooling coils) by modulating the face and bypass dampers through one of the following:<br><br>Cooling:<br><ul>When the space temperature is greater than the cooling setpoint, the face and bypass dampers will modulate open to face position (closed to bypass position) to maintain supply air temperature setpoint by modulating the air passing over the cooling coil (if present).  The supply air temperature setpoint will be reset downwards as the space temperature rises above its cooling setpoint.</ul><br><ul>When the space temperature is less than the cooling setpoint, the face and bypass dampers will close to face position (open to bypass position).</ul><br><br>Heating:<br><ul>When the space temperature is less than the heating setpoint, the face and bypass dampers will modulate open to face position (closed to bypass position) to maintain supply air temperature setpoint by modulating the air passing over the heating coil (if present). The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.</ul><br><ul>When the space temperature is greater than the ehating setpoint, the face and bypass dampers will close to face position (open to bypass position).</ul><br><br>'
    },
    'internal': {
        'isUsed': false,
        'points': {
            0: 'faceAndBypassDamper'
        },
        'sequence': '<strong>Face and Bypass Dampers Control:</strong><br>The unit will maintain space heating and cooling setpoints (if equipped with associated heating and cooling coils) by modulating the face and bypass dampers through one of the following:<br><br>Cooling:<br><ul>When the space temperature is greater than the cooling setpoint, the face and bypass dampers will modulate open to face position (closed to bypass position) to maintain supply air temperature setpoint by modulating the air passing over the cooling coil (if present).  The supply air temperature setpoint will be reset downwards as the space temperature rises above its cooling setpoint.</ul><br><ul>When the space temperature is less than the cooling setpoint, the face and bypass dampers will close to face position (open to bypass position).</ul><br><br>Heating:<br><ul>When the space temperature is less than the heating setpoint, the face and bypass dampers will modulate open to face position (closed to bypass position) to maintain supply air temperature setpoint by modulating the air passing over the heating coil (if present). The supply air temperature setpoint will be reset upwards as the space temperature drops below its heating setpoint.</ul><br><ul>When the space temperature is greater than the ehating setpoint, the face and bypass dampers will close to face position (open to bypass position).</ul><br><br>'
    }
};

var filterOneMonitoring = {
    'none': {
        'isUsed': true
    },
    'hours': {
        'isUsed': false,
        'points': {
            0: 'schedule',
            'sequence': '<strong>Filter One Hours:</strong><br>The controller will monitor the fan runtime.<br><br>Alarms will be provided as follows:<br><ul>Filter One change required: Filter 1 has been in use for more than <input type=\'number\' id=\'filter1hoursSetpoint\'> hours.</ul><br><br>'
        }
    },
    'status': {
        'isUsed': false,
        'points': {
            0: 'filter1Status'
        },
        'sequence': '<strong>Filter One Status:</strong>the controller will monitor filter 1 status.<br><br>Alarms will be provided as follows:<br><ul>Filter 1 change required: Filter1 differential pressure exceeds a user definable limit.<br><br>'
    },
    'differentialPressure': {
        'isUsed': false,
        'points': {
            0: 'filter1DifferentialPressure'
        },
        'sequence': '<strong>Filter One Differential Pressure:</strong><br>The controller will monitor Filter 1 differential pressure in H2O.<br><br>Gain used to smooth the filter differential pressure input reading is <input type=\'number\' id=\'filter1DiffPress\'>, where 1 = no smoothing and 10 = maximum smoothing.<br><br>Alarms will be provided as follows:<br><ul>Filter One change required: Filter One differential pressure exceeds a user definable limit <input type=\'number\' id=\'filter1DiffPressLimit\'> in H2O.<br><br>'
    }
};

var filterTwoMonitoring = {
    'none': {
        'isUsed': true
    },
    'hours': {
        'isUsed': false,
        'points': {
            0: 'schedule'
        },
        'sequence': '<strong>Filter Two Hours:</strong><br>The controller will monitor the fan runtime.<br><br>Alarms will be provided as follows:<br><ul>Filter two change required: Filter 2 has been in use for more than <input type=\'number\' id=\'filter2hoursSetpoint\'> hours.</ul><br><br>'
    },
    'status': {
        'isUsed': false,
        'points': {
            0: 'filter2Status'
        },
        'sequence': '<strong>Filter two Status:</strong>the controller will monitor filter 2 status.<br><br>Alarms will be provided as follows:<br><ul>Filter 2 change required: Filter 2 differential pressure exceeds a user definable limit.<br><br>'
    },
    'differentialPressure': {
        'isUsed': false,
        'points': {
            0: 'filter2DifferentialPressure'
        },
        'sequence': '<strong>Filter Two Differential Pressure:</strong><br>The controller will monitor Filter 2 differential pressure in H2O.<br><br>Gain used to smooth the filter differential pressure input reading is <input type=\'number\' id=\'filter2DiffPress\'>, where 1 = no smoothing and 10 = maximum smoothing.<br><br>Alarms will be provided as follows:<br><ul>Filter Two change required: Filter Two differential pressure exceeds a user definable limit <input type=\'number\' id=\'filter2DiffPressLimit\'> in H2O.<br><br>'
    }
};



var constantVolume = {
    runConditions,
    safties,
    smokeControl,
    outdoorAirTemp,
    supplyFan,
    vfd,
    returnFan,
    exhaustFan,
    preHeating,
    faceAndBypassDampers,
    heating,
    cooling,
    mixedAirDamper,
    minOutsideAir,
    humidityControl,
    humidifier,
    RARH,
    OARH,
    filterOneMonitoring,
    filterTwoMonitoring
};




//Export Module

module.exports = constantVolume;