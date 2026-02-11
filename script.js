const itemsPerPage = 32;
let currentPage = 1;
let currentDropdownTarget = null;
const items = [
    { icon: "https://wiki.factorio.com/images/thumb/Wooden_chest.png/32px-Wooden_chest.png", product: "wooden-chest", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Iron_chest.png/32px-Iron_chest.png", product: "iron-chest", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Steel_chest.png/32px-Steel_chest.png", product: "steel-chest", count: 19 },
    { icon: "https://wiki.factorio.com/images/thumb/Storage_tank.png/32px-Storage_tank.png", product: "storage-tank", count: 41 },
    { icon: "https://wiki.factorio.com/images/thumb/Transport_belt.png/32px-Transport_belt.png", product: "transport-belt", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Fast_transport_belt.png/32px-Fast_transport_belt.png", product: "fast-transport-belt", count: 7 },
    { icon: "https://wiki.factorio.com/images/thumb/Express_transport_belt.png/32px-Express_transport_belt.png", product: "express-transport-belt", count: 12 },
    { icon: "https://wiki.factorio.com/images/thumb/Turbo_transport_belt.png/32px-Turbo_transport_belt.png", product: "turbo-transport-belt", count: 356 },
    { icon: "https://wiki.factorio.com/images/thumb/Underground_belt.png/32px-Underground_belt.png", product: "underground-belt", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Fast_underground_belt.png/32px-Fast_underground_belt.png", product: "fast-underground-belt", count: 29 },
    { icon: "https://wiki.factorio.com/images/thumb/Express_underground_belt.png/32px-Express_underground_belt.png", product: "express-underground-belt", count: 40 },
    { icon: "https://wiki.factorio.com/images/thumb/Turbo_underground_belt.png/32px-Turbo_underground_belt.png", product: "turbo-underground-belt", count: 1412 },
    { icon: "https://wiki.factorio.com/images/thumb/Splitter.png/32px-Splitter.png", product: "splitter", count: 34 },
    { icon: "https://wiki.factorio.com/images/thumb/Fast_splitter.png/32px-Fast_splitter.png", product: "fast-splitter", count: 85 },
    { icon: "https://wiki.factorio.com/images/thumb/Express_splitter.png/32px-Express_splitter.png", product: "express-splitter", count: 373 },
    { icon: "https://wiki.factorio.com/images/thumb/Turbo_splitter.png/32px-Turbo_splitter.png", product: "turbo-splitter", count: 1539 },
    { icon: "https://wiki.factorio.com/images/thumb/Burner_inserter.png/32px-Burner_inserter.png", product: "burner-inserter", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Inserter.png/32px-Inserter.png", product: "inserter", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Long-handed_inserter.png/32px-Long-handed_inserter.png", product: "long-handed-inserter", count: 11 },
    { icon: "https://wiki.factorio.com/images/thumb/Fast_inserter.png/32px-Fast_inserter.png", product: "fast-inserter", count: 19 },
    { icon: "https://wiki.factorio.com/images/thumb/Bulk_inserter.png/32px-Bulk_inserter.png", product: "bulk-inserter", count: 131 },
    { icon: "https://wiki.factorio.com/images/thumb/Stack_inserter.png/32px-Stack_inserter.png", product: "stack-inserter", count: 313 },
    { icon: "https://wiki.factorio.com/images/thumb/Small_electric_pole.png/32px-Small_electric_pole.png", product: "small-electric-pole", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Medium_electric_pole.png/32px-Medium_electric_pole.png", product: "medium-electric-pole", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Big_electric_pole.png/32px-Big_electric_pole.png", product: "big-electric-pole", count: 16 },
    { icon: "https://wiki.factorio.com/images/thumb/Substation.png/32px-Substation.png", product: "substation", count: 251 },
    { icon: "https://wiki.factorio.com/images/thumb/Pipe.png/32px-Pipe.png", product: "pipe", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Pipe_to_ground.png/32px-Pipe_to_ground.png", product: "pipe-to-ground", count: 4 },
    { icon: "https://wiki.factorio.com/images/thumb/Pump.png/32px-Pump.png", product: "pump", count: 52 },
    { icon: "https://wiki.factorio.com/images/thumb/Straight_rail.png/32px-Straight_rail.png", product: "rail", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Rail_ramp.png/32px-Rail_ramp.png", product: "rail-ramp", count: 117 },
    { icon: "https://wiki.factorio.com/images/thumb/Rail_support.png/32px-Rail_support.png", product: "rail-support", count: 159 },
    { icon: "https://wiki.factorio.com/images/thumb/Train_stop.png/32px-Train_stop.png", product: "train-stop", count: 34 },
    { icon: "https://wiki.factorio.com/images/thumb/Rail_signal.png/32px-Rail_signal.png", product: "rail-signal", count: 11 },
    { icon: "https://wiki.factorio.com/images/thumb/Rail_chain_signal.png/32px-Rail_chain_signal.png", product: "rail-chain-signal", count: 11 },
    { icon: "https://wiki.factorio.com/images/thumb/Locomotive.png/32px-Locomotive.png", product: "locomotive", count: 940 },
    { icon: "https://wiki.factorio.com/images/thumb/Cargo_wagon.png/32px-Cargo_wagon.png", product: "cargo-wagon", count: 73 },
    { icon: "https://wiki.factorio.com/images/thumb/Fluid_wagon.png/32px-Fluid_wagon.png", product: "fluid-wagon", count: 93 },
    { icon: "https://wiki.factorio.com/images/thumb/Artillery_wagon.png/32px-Artillery_wagon.png", product: "artillery-wagon", count: 10944 },
    { icon: "https://wiki.factorio.com/images/thumb/Car.png/32px-Car.png", product: "car", count: 367 },
    { icon: "https://wiki.factorio.com/images/thumb/Tank.png/32px-Tank.png", product: "tank", count: 1905 },
    { icon: "https://wiki.factorio.com/images/thumb/Spidertron.png/32px-Spidertron.png", product: "spidertron", count: 97893 },
    { icon: "https://wiki.factorio.com/images/thumb/Logistic_robot.png/32px-Logistic_robot.png", product: "logistic-robot", count: 275 },
    { icon: "https://wiki.factorio.com/images/thumb/Construction_robot.png/32px-Construction_robot.png", product: "construction-robot", count: 192 },
    { icon: "https://wiki.factorio.com/images/thumb/Active_provider_chest.png/32px-Active_provider_chest.png", product: "active-provider-chest", count: 80 },
    { icon: "https://wiki.factorio.com/images/thumb/Passive_provider_chest.png/32px-Passive_provider_chest.png", product: "passive-provider-chest", count: 77 },
    { icon: "https://wiki.factorio.com/images/thumb/Storage_chest.png/32px-Storage_chest.png", product: "storage-chest", count: 77 },
    { icon: "https://wiki.factorio.com/images/thumb/Buffer_chest.png/32px-Buffer_chest.png", product: "buffer-chest", count: 80 },
    { icon: "https://wiki.factorio.com/images/thumb/Requester_chest.png/32px-Requester_chest.png", product: "requester-chest", count: 80 },
    { icon: "https://wiki.factorio.com/images/thumb/Roboport.png/32px-Roboport.png", product: "roboport", count: 2173 },
    { icon: "https://wiki.factorio.com/images/thumb/Lamp.png/32px-Lamp.png", product: "small-lamp", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Arithmetic_combinator.png/32px-Arithmetic_combinator.png", product: "arithmetic-combinator", count: 22 },
    { icon: "https://wiki.factorio.com/images/thumb/Decider_combinator.png/32px-Decider_combinator.png", product: "decider-combinator", count: 22 },
    { icon: "https://wiki.factorio.com/images/thumb/Selector_combinator.png/32px-Selector_combinator.png", product: "selector-combinator", count: 201 },
    { icon: "https://wiki.factorio.com/images/thumb/Constant_combinator.png/32px-Constant_combinator.png", product: "constant-combinator", count: 11 },
    { icon: "https://wiki.factorio.com/images/thumb/Power_switch.png/32px-Power_switch.png", product: "power-switch", count: 21 },
    { icon: "https://wiki.factorio.com/images/thumb/Programmable_speaker.png/32px-Programmable_speaker.png", product: "programmable-speaker", count: 28 },
    { icon: "https://wiki.factorio.com/images/thumb/Display_panel.png/32px-Display_panel.png", product: "display-panel", count: 7 },
    { icon: "https://wiki.factorio.com/images/thumb/Stone_brick.png/32px-Stone_brick.png", product: "stone-brick", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Concrete.png/32px-Concrete.png", product: "concrete", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Refined_concrete.png/32px-Refined_concrete.png", product: "refined-concrete", count: 5 },
    { icon: "https://wiki.factorio.com/images/thumb/Hazard_concrete.png/32px-Hazard_concrete.png", product: "hazard-concrete", count: 7 },
    { icon: "https://wiki.factorio.com/images/thumb/Refined_hazard_concrete.png/32px-Refined_hazard_concrete.png", product: "refined-hazard-concrete", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Landfill.png/32px-Landfill.png", product: "landfill", count: 25 },
    { icon: "https://wiki.factorio.com/images/thumb/Artificial_yumako_soil.png/32px-Artificial_yumako_soil.png", product: "artificial-yumako-soil", count: 20 },
    { icon: "https://wiki.factorio.com/images/thumb/Overgrowth_yumako_soil.png/32px-Overgrowth_yumako_soil.png", product: "overgrowth-yumako-soil", count: 30 },
    { icon: "https://wiki.factorio.com/images/thumb/Artificial_jellynut_soil.png/32px-Artificial_jellynut_soil.png", product: "artificial-jellynut-soil", count: 20 },
    { icon: "https://wiki.factorio.com/images/thumb/Overgrowth_jellynut_soil.png/32px-Overgrowth_jellynut_soil.png", product: "overgrowth-jellynut-soil", count: 30 },
    { icon: "https://wiki.factorio.com/images/thumb/Ice_platform.png/32px-Ice_platform.png", product: "ice-platform", count: 75 },
    { icon: "https://wiki.factorio.com/images/thumb/Foundation.png/32px-Foundation.png", product: "foundation", count: 676 },
    { icon: "https://wiki.factorio.com/images/thumb/Cliff_explosives.png/32px-Cliff_explosives.png", product: "cliff-explosives", count: 200 },
    { icon: "https://wiki.factorio.com/images/thumb/Repair_pack.png/32px-Repair_pack.png", product: "repair-pack", count: 11 },
    { icon: "https://wiki.factorio.com/images/thumb/Boiler.png/32px-Boiler.png", product: "boiler", count: 9 },
    { icon: "https://wiki.factorio.com/images/thumb/Steam_engine.png/32px-Steam_engine.png", product: "steam-engine", count: 21 },
    { icon: "https://wiki.factorio.com/images/thumb/Solar_panel.png/32px-Solar_panel.png", product: "solar-panel", count: 108 },
    { icon: "https://wiki.factorio.com/images/thumb/Accumulator.png/32px-Accumulator.png", product: "accumulator", count: 103 },
    { icon: "https://wiki.factorio.com/images/thumb/Nuclear_reactor.png/32px-Nuclear_reactor.png", product: "nuclear-reactor", count: 24913 },
    { icon: "https://wiki.factorio.com/images/thumb/Heat_pipe.png/32px-Heat_pipe.png", product: "heat-pipe", count: 45 },
    { icon: "https://wiki.factorio.com/images/thumb/Heat_exchanger.png/32px-Heat_exchanger.png", product: "heat-exchanger", count: 136 },
    { icon: "https://wiki.factorio.com/images/thumb/Steam_turbine.png/32px-Steam_turbine.png", product: "steam-turbine", count: 107 },
    { icon: "https://wiki.factorio.com/images/thumb/Fusion_reactor.png/32px-Fusion_reactor.png", product: "fusion-reactor", count: 78233 },
    { icon: "https://wiki.factorio.com/images/thumb/Fusion_generator.png/32px-Fusion_generator.png", product: "fusion-generator", count: 23889 },
    { icon: "https://wiki.factorio.com/images/thumb/Burner_mining_drill.png/32px-Burner_mining_drill.png", product: "burner-mining-drill", count: 17 },
    { icon: "https://wiki.factorio.com/images/thumb/Electric_mining_drill.png/32px-Electric_mining_drill.png", product: "electric-mining-drill", count: 32 },
    { icon: "https://wiki.factorio.com/images/thumb/Big_mining_drill.png/32px-Big_mining_drill.png", product: "big-mining-drill", count: 1839 },
    { icon: "https://wiki.factorio.com/images/thumb/Offshore_pump.png/32px-Offshore_pump.png", product: "offshore-pump", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Pumpjack.png/32px-Pumpjack.png", product: "pumpjack", count: 62 },
    { icon: "https://wiki.factorio.com/images/thumb/Stone_furnace.png/32px-Stone_furnace.png", product: "stone-furnace", count: 5 },
    { icon: "https://wiki.factorio.com/images/thumb/Steel_furnace.png/32px-Steel_furnace.png", product: "steel-furnace", count: 66 },
    { icon: "https://wiki.factorio.com/images/thumb/Electric_furnace.png/32px-Electric_furnace.png", product: "electric-furnace", count: 301 },
    { icon: "https://wiki.factorio.com/images/thumb/Foundry.png/32px-Foundry.png", product: "foundry", count: 2826 },
    { icon: "https://wiki.factorio.com/images/thumb/Recycler.png/32px-Recycler.png", product: "recycler", count: 1210 },
    { icon: "https://wiki.factorio.com/images/thumb/Agricultural_tower.png/32px-Agricultural_tower.png", product: "agricultural-tower", count: 93 },
    { icon: "https://wiki.factorio.com/images/thumb/Biochamber.png/32px-Biochamber.png", product: "biochamber", count: 36 },
    { icon: "https://wiki.factorio.com/images/thumb/Captive_biter_spawner.png/32px-Captive_biter_spawner.png", product: "captive-biter-spawner", count: 11609 },
    { icon: "https://wiki.factorio.com/images/thumb/Assembling_machine_1.png/32px-Assembling_machine_1.png", product: "assembling-machine-1", count: 25 },
    { icon: "https://wiki.factorio.com/images/thumb/Assembling_machine_2.png/32px-Assembling_machine_2.png", product: "assembling-machine-2", count: 46 },
    { icon: "https://wiki.factorio.com/images/thumb/Assembling_machine_3.png/32px-Assembling_machine_3.png", product: "assembling-machine-3", count: 1290 },
    { icon: "https://wiki.factorio.com/images/thumb/Oil_refinery.png/32px-Oil_refinery.png", product: "oil-refinery", count: 146 },
    { icon: "https://wiki.factorio.com/images/thumb/Chemical_plant.png/32px-Chemical_plant.png", product: "chemical-plant", count: 55 },
    { icon: "https://wiki.factorio.com/images/thumb/Centrifuge.png/32px-Centrifuge.png", product: "centrifuge", count: 4857 },
    { icon: "https://wiki.factorio.com/images/thumb/Electromagnetic_plant.png/32px-Electromagnetic_plant.png", product: "electromagnetic-plant", count: 20607 },
    { icon: "https://wiki.factorio.com/images/thumb/Cryogenic_plant.png/32px-Cryogenic_plant.png", product: "cryogenic-plant", count: 4299 },
    { icon: "https://wiki.factorio.com/images/thumb/Lab.png/32px-Lab.png", product: "lab", count: 58 },
    { icon: "https://wiki.factorio.com/images/thumb/Biolab.png/32px-Biolab.png", product: "biolab", count: 242 },
    { icon: "https://wiki.factorio.com/images/thumb/Lightning_rod.png/32px-Lightning_rod.png", product: "lightning-rod", count: 53 },
    { icon: "https://wiki.factorio.com/images/thumb/Lightning_collector.png/32px-Lightning_collector.png", product: "lightning-collector", count: 2090 },
    { icon: "https://wiki.factorio.com/images/thumb/Heating_tower.png/32px-Heating_tower.png", product: "heating-tower", count: 304 },
    { icon: "https://wiki.factorio.com/images/thumb/Beacon.png/32px-Beacon.png", product: "beacon", count: 1055 },
    { icon: "https://wiki.factorio.com/images/thumb/Speed_module.png/32px-Speed_module.png", product: "speed-module", count: 300 },
    { icon: "https://wiki.factorio.com/images/thumb/Speed_module_2.png/32px-Speed_module_2.png", product: "speed-module-2", count: 2447 },
    { icon: "https://wiki.factorio.com/images/thumb/Speed_module_3.png/32px-Speed_module_3.png", product: "speed-module-3", count: 11227 },
    { icon: "https://wiki.factorio.com/images/thumb/Productivity_module.png/32px-Productivity_module.png", product: "productivity-module", count: 300 },
    { icon: "https://wiki.factorio.com/images/thumb/Productivity_module_2.png/32px-Productivity_module_2.png", product: "productivity-module-2", count: 2447 },
    { icon: "https://wiki.factorio.com/images/thumb/Productivity_module_3.png/32px-Productivity_module_3.png", product: "productivity-module-3", count: 11149 },
    { icon: "https://wiki.factorio.com/images/thumb/Efficiency_module.png/32px-Efficiency_module.png", product: "efficiency-module", count: 300 },
    { icon: "https://wiki.factorio.com/images/thumb/Efficiency_module_2.png/32px-Efficiency_module_2.png", product: "efficiency-module-2", count: 2447 },
    { icon: "https://wiki.factorio.com/images/thumb/Efficiency_module_3.png/32px-Efficiency_module_3.png", product: "efficiency-module-3", count: 11148 },
    { icon: "https://wiki.factorio.com/images/thumb/Quality_module.png/32px-Quality_module.png", product: "quality-module", count: 300 },
    { icon: "https://wiki.factorio.com/images/thumb/Quality_module_2.png/32px-Quality_module_2.png", product: "quality-module-2", count: 2447 },
    { icon: "https://wiki.factorio.com/images/thumb/Quality_module_3.png/32px-Quality_module_3.png", product: "quality-module-3", count: 11154 },
    { icon: "https://wiki.factorio.com/images/thumb/Ice.png/32px-Ice.png", product: "ice", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Copper_plate.png/32px-Copper_plate.png", product: "copper-plate", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Iron_plate.png/32px-Iron_plate.png", product: "iron-plate", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Steel_plate.png/32px-Steel_plate.png", product: "steel-plate", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Solid_fuel.png/32px-Solid_fuel.png", product: "solid-fuel", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Plastic_bar.png/32px-Plastic_bar.png", product: "plastic-bar", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Sulfur.png/32px-Sulfur.png", product: "sulfur", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Battery.png/32px-Battery.png", product: "battery", count: 13 },
    { icon: "https://wiki.factorio.com/images/thumb/Explosives.png/32px-Explosives.png", product: "explosives", count: 7 },
    { icon: "https://wiki.factorio.com/images/thumb/Carbon.png/32px-Carbon.png", product: "carbon", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Iron_gear_wheel.png/32px-Iron_gear_wheel.png", product: "iron-gear-wheel", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Copper_cable.png/32px-Copper_cable.png", product: "copper-cable", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Iron_stick.png/32px-Iron_stick.png", product: "iron-stick", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Barrel.png/32px-Barrel.png", product: "barrel", count: 4 },
    { icon: "https://wiki.factorio.com/images/thumb/Electronic_circuit.png/32px-Electronic_circuit.png", product: "electronic-circuit", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Advanced_circuit.png/32px-Advanced_circuit.png", product: "advanced-circuit", count: 46 },
    { icon: "https://wiki.factorio.com/images/thumb/Processing_unit.png/32px-Processing_unit.png", product: "processing-unit", count: 183 },
    { icon: "https://wiki.factorio.com/images/thumb/Engine_unit.png/32px-Engine_unit.png", product: "engine-unit", count: 42 },
    { icon: "https://wiki.factorio.com/images/thumb/Electric_engine_unit.png/32px-Electric_engine_unit.png", product: "electric-engine-unit", count: 70 },
    { icon: "https://wiki.factorio.com/images/thumb/Flying_robot_frame.png/32px-Flying_robot_frame.png", product: "flying-robot-frame", count: 183 },
    { icon: "https://wiki.factorio.com/images/thumb/Low_density_structure.png/32px-Low_density_structure.png", product: "low-density-structure", count: 39 },
    { icon: "https://wiki.factorio.com/images/thumb/Rocket_fuel.png/32px-Rocket_fuel.png", product: "rocket-fuel", count: 162 },
    { icon: "https://wiki.factorio.com/images/thumb/Nuclear_fuel.png/32px-Nuclear_fuel.png", product: "nuclear-fuel", count: 905 },
    { icon: "https://wiki.factorio.com/images/thumb/Uranium-238.png/32px-Uranium-238.png", product: "uranium-238", count: 211 },
    { icon: "https://wiki.factorio.com/images/thumb/Uranium-235.png/32px-Uranium-235.png", product: "uranium-235", count: 728 },
    { icon: "https://wiki.factorio.com/images/thumb/Depleted_uranium_fuel_cell.png/32px-Depleted_uranium_fuel_cell.png", product: "depleted-uranium-fuel-cell", count: 468 },
    { icon: "https://wiki.factorio.com/images/thumb/Tungsten_carbide.png/32px-Tungsten_carbide.png", product: "tungsten-carbide", count: 78 },
    { icon: "https://wiki.factorio.com/images/thumb/Tungsten_plate.png/32px-Tungsten_plate.png", product: "tungsten-plate", count: 104 },
    { icon: "https://wiki.factorio.com/images/thumb/Holmium_plate.png/32px-Holmium_plate.png", product: "holmium-plate", count: 137 },
    { icon: "https://wiki.factorio.com/images/thumb/Superconductor.png/32px-Superconductor.png", product: "superconductor", count: 60 },
    { icon: "https://wiki.factorio.com/images/thumb/Supercapacitor.png/32px-Supercapacitor.png", product: "supercapacitor", count: 311 },
    { icon: "https://wiki.factorio.com/images/thumb/Yumako_seed.png/32px-Yumako_seed.png", product: "yumako-seed", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Jellynut_seed.png/32px-Jellynut_seed.png", product: "jellynut-seed", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Tree_seed.png/32px-Tree_seed.png", product: "tree-seed", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Spoilage.png/32px-Spoilage.png", product: "spoilage", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Nutrients.png/32px-Nutrients.png", product: "nutrients", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Bioflux.png/32px-Bioflux.png", product: "bioflux", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Yumako_mash.png/32px-Yumako_mash.png", product: "yumako-mash", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Jelly.png/32px-Jelly.png", product: "jelly", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Carbon_fiber.png/32px-Carbon_fiber.png", product: "carbon-fiber", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Water_barrel.png/32px-Water_barrel.png", product: "water_barrel", count: 4 },
    { icon: "https://wiki.factorio.com/images/thumb/Crude_oil_barrel.png/32px-Crude_oil_barrel.png", product: "crude_oil_barrel", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Petroleum_gas_barrel.png/32px-Petroleum_gas_barrel.png", product: "petroleum_gas_barrel", count: 44 },
    { icon: "https://wiki.factorio.com/images/thumb/Light_oil_barrel.png/32px-Light_oil_barrel.png", product: "light_oil_barrel", count: 26 },
    { icon: "https://wiki.factorio.com/images/thumb/Heavy_oil_barrel.png/32px-Heavy_oil_barrel.png", product: "heavy_oil_barrel", count: 15 },
    { icon: "https://wiki.factorio.com/images/thumb/Lubricant_barrel.png/32px-Lubricant_barrel.png", product: "lubricant_barrel", count: 45 },
    { icon: "https://wiki.factorio.com/images/thumb/Sulfuric_acid_barrel.png/32px-Sulfuric_acid_barrel.png", product: "Sulfuric_acid_barrel", count: 48 },
    { icon: "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29_barrel.png/32px-Fluoroketone_%28hot%29_barrel.png", product: "fluoroketone_hot_barrel", count: 207 },
    { icon: "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29_barrel.png/32px-Fluoroketone_%28cold%29_barrel.png", product: "fluoroketone_cold_barrel", count: 332 },
    { icon: "https://wiki.factorio.com/images/thumb/Biter_egg.png/32px-Biter_egg.png", product: "biter-egg", count: 2 },
    { icon: "https://wiki.factorio.com/images/thumb/Pentapod_egg.png/32px-Pentapod_egg.png", product: "pentapod-egg", count: 3 },
    { icon: "https://wiki.factorio.com/images/thumb/Lithium.png/32px-Lithium.png", product: "lithium", count: 36 },
    { icon: "https://wiki.factorio.com/images/thumb/Lithium_plate.png/32px-Lithium_plate.png", product: "lithium-plate", count: 42 },
    { icon: "https://wiki.factorio.com/images/thumb/Quantum_processor.png/32px-Quantum_processor.png", product: "quantum-processor", count: 221 },
    { icon: "https://wiki.factorio.com/images/thumb/Fusion_power_cell.png/32px-Fusion_power_cell.png", product: "fusion-power-cell", count: 363 },
    { icon: "https://wiki.factorio.com/images/thumb/Automation_science_pack.png/32px-Automation_science_pack.png", product: "automation-science-pack", count: 21 },
    { icon: "https://wiki.factorio.com/images/thumb/Logistic_science_pack.png/32px-Logistic_science_pack.png", product: "logistic-science-pack", count: 32 },
    { icon: "https://wiki.factorio.com/images/thumb/Military_science_pack.png/32px-Military_science_pack.png", product: "military-science-pack", count: 97 },
    { icon: "https://wiki.factorio.com/images/thumb/Chemical_science_pack.png/32px-Chemical_science_pack.png", product: "chemical-science-pack", count: 154 },
    { icon: "https://wiki.factorio.com/images/thumb/Production_science_pack.png/32px-Production_science_pack.png", product: "production-science-pack", count: 247 },
    { icon: "https://wiki.factorio.com/images/thumb/Utility_science_pack.png/32px-Utility_science_pack.png", product: "utility-science-pack", count: 247 },
    { icon: "https://wiki.factorio.com/images/thumb/Space_science_pack.png/32px-Space_science_pack.png", product: "space-science-pack", count: 64 },
    { icon: "https://wiki.factorio.com/images/thumb/Metallurgic_science_pack.png/32px-Metallurgic_science_pack.png", product: "metallurgic-science-pack", count: 303 },
    { icon: "https://wiki.factorio.com/images/thumb/Agricultural_science_pack.png/32px-Agricultural_science_pack.png", product: "agricultural-science-pack", count: 416 },
    { icon: "https://wiki.factorio.com/images/thumb/Electromagnetic_science_pack.png/32px-Electromagnetic_science_pack.png", product: "electromagnetic-science-pack", count: 528 },
    { icon: "https://wiki.factorio.com/images/thumb/Cryogenic_science_pack.png/32px-Cryogenic_science_pack.png", product: "cryogenic-science-pack", count: 78 },
    { icon: "https://wiki.factorio.com/images/thumb/Promethium_science_pack.png/32px-Promethium_science_pack.png", product: "promethium-science-pack", count: 133 },
    { icon: "https://wiki.factorio.com/images/thumb/Rocket_silo.png/32px-Rocket_silo.png", product: "rocket-silo", count: 54452 },
    { icon: "https://wiki.factorio.com/images/thumb/Cargo_landing_pad.png/32px-Cargo_landing_pad.png", product: "cargo-landing-pad", count: 2316 },
    { icon: "https://wiki.factorio.com/images/thumb/Space_platform_foundation.png/32px-Space_platform_foundation.png", product: "space-platform-foundation", count: 86 },
    { icon: "https://wiki.factorio.com/images/thumb/Cargo_bay.png/32px-Cargo_bay.png", product: "cargo-bay", count: 1755 },
    { icon: "https://wiki.factorio.com/images/thumb/Asteroid_collector.png/32px-Asteroid_collector.png", product: "asteroid-collector", count: 2271 },
    { icon: "https://wiki.factorio.com/images/thumb/Crusher.png/32px-Crusher.png", product: "crusher", count: 1519 },
    { icon: "https://wiki.factorio.com/images/thumb/Thruster.png/32px-Thruster.png", product: "thruster", count: 2236 },
    { icon: "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/32px-Space_platform_hub.png", product: "space-platform-starter-pack", count: 9049 },
    { icon: "https://wiki.factorio.com/images/thumb/Satellite.png/32px-Satellite.png", product: "satellite", count: 1214 },
    { icon: "https://wiki.factorio.com/images/thumb/Metallic_asteroid_chunk.png/32px-Metallic_asteroid_chunk.png", product: "metallic-asteroid-chunk", count: 42 },
    { icon: "https://wiki.factorio.com/images/thumb/Carbonic_asteroid_chunk.png/32px-Carbonic_asteroid_chunk.png", product: "carbonic-asteroid-chunk", count: 24 },
    { icon: "https://wiki.factorio.com/images/thumb/Oxide_asteroid_chunk.png/32px-Oxide_asteroid_chunk.png", product: "oxide-asteroid-chunk", count: 12 },
    { icon: "https://wiki.factorio.com/images/thumb/Promethium_asteroid_chunk.png/32px-Promethium_asteroid_chunk.png", product: "promethium-asteroid-chunk", count: 368 },
    { icon: "https://wiki.factorio.com/images/thumb/Submachine_gun.png/32px-Submachine_gun.png", product: "submachine-gun", count: 59 },
    { icon: "https://wiki.factorio.com/images/thumb/Railgun.png/32px-Railgun.png", product: "railgun", count: 5533 },
    { icon: "https://wiki.factorio.com/images/thumb/Tesla_gun.png/32px-Tesla_gun.png", product: "teslagun", count: 1877 },
    { icon: "https://wiki.factorio.com/images/thumb/Shotgun.png/32px-Shotgun.png", product: "shotgun", count: 64 },
    { icon: "https://wiki.factorio.com/images/thumb/Combat_shotgun.png/32px-Combat_shotgun.png", product: "combat-shotgun", count: 81 },
    { icon: "https://wiki.factorio.com/images/thumb/Rocket_launcher.png/32px-Rocket_launcher.png", product: "rocket-launcher", count: 64 },
    { icon: "https://wiki.factorio.com/images/thumb/Flamethrower.png/32px-Flamethrower.png", product: "flamethrower", count: 55 },
    { icon: "https://wiki.factorio.com/images/thumb/Firearm_magazine.png/32px-Firearm_magazine.png", product: "firearm-magazine", count: 8 },
    { icon: "https://wiki.factorio.com/images/thumb/Piercing_rounds_magazine.png/32px-Piercing_rounds_magazine.png", product: "piercing-rounds-magazine", count: 26 },
    { icon: "https://wiki.factorio.com/images/thumb/Uranium_rounds_magazine.png/32px-Uranium_rounds_magazine.png", product: "uranium-rounds-magazine", count: 274 },
    { icon: "https://wiki.factorio.com/images/thumb/Shotgun_shells.png/32px-Shotgun_shells.png", product: "shotgun-shell", count: 15 },
    { icon: "https://wiki.factorio.com/images/thumb/Piercing_shotgun_shells.png/32px-Piercing_shotgun_shells.png", product: "piercing-shotgun-shell", count: 69 },
    { icon: "https://wiki.factorio.com/images/thumb/Cannon_shell.png/32px-Cannon_shell.png", product: "cannon-shell", count: 55 },
    { icon: "https://wiki.factorio.com/images/thumb/Explosive_cannon_shell.png/32px-Explosive_cannon_shell.png", product: "explosive-cannon-shell", count: 62 },
    { icon: "https://wiki.factorio.com/images/thumb/Uranium_cannon_shell.png/32px-Uranium_cannon_shell.png", product: "uranium-cannon-shell", count: 310 },
    { icon: "https://wiki.factorio.com/images/thumb/Explosive_uranium_cannon_shell.png/32px-Explosive_uranium_cannon_shell.png", product: "explosive-uranium-cannon-shell", count: 317 },
    { icon: "https://wiki.factorio.com/images/thumb/Artillery_shell.png/32px-Artillery_shell.png", product: "artillery-shell", count: 559 },
    { icon: "https://wiki.factorio.com/images/thumb/Rocket.png/32px-Rocket.png", product: "rocket", count: 24 },
    { icon: "https://wiki.factorio.com/images/thumb/Explosive_rocket.png/32px-Explosive_rocket.png", product: "explosive-rocket", count: 67 },
    { icon: "https://wiki.factorio.com/images/thumb/Atomic_bomb.png/32px-Atomic_bomb.png", product: "atomic-bomb", count: 74830 },
    { icon: "https://wiki.factorio.com/images/thumb/Capture_bot_rocket.png/32px-Capture_bot_rocket.png", product: "capture-robot-rocket", count: 579 },
    { icon: "https://wiki.factorio.com/images/thumb/Railgun_ammo.png/32px-Railgun_ammo.png", product: "railgun-ammo", count: 120 },
    { icon: "https://wiki.factorio.com/images/thumb/Flamethrower_ammo.png/32px-Flamethrower_ammo.png", product: "flamethrower-ammo", count: 22 },
    { icon: "https://wiki.factorio.com/images/thumb/Tesla_ammo.png/32px-Tesla_ammo.png", product: "tesla-ammo", count: 278 },
    { icon: "https://wiki.factorio.com/images/thumb/Grenade.png/32px-Grenade.png", product: "grenade", count: 86 },
    { icon: "https://wiki.factorio.com/images/thumb/Cluster_grenade.png/32px-Cluster_grenade.png", product: "cluster-grenade", count: 672 },
    { icon: "https://wiki.factorio.com/images/thumb/Poison_capsule.png/32px-Poison_capsule.png", product: "poison-capsule", count: 98 },
    { icon: "https://wiki.factorio.com/images/thumb/Slowdown_capsule.png/32px-Slowdown_capsule.png", product: "slowdown-capsule", count: 67 },
    { icon: "https://wiki.factorio.com/images/thumb/Defender_capsule.png/32px-Defender_capsule.png", product: "defender-capsule", count: 120 },
    { icon: "https://wiki.factorio.com/images/thumb/Distractor_capsule.png/32px-Distractor_capsule.png", product: "distractor-capsule", count: 669 },
    { icon: "https://wiki.factorio.com/images/thumb/Destroyer_capsule.png/32px-Destroyer_capsule.png", product: "destroyer-capsule", count: 2921 },
    { icon: "https://wiki.factorio.com/images/thumb/Light_armor.png/32px-Light_armor.png", product: "light-armor", count: 50 },
    { icon: "https://wiki.factorio.com/images/thumb/Heavy_armor.png/32px-Heavy_armor.png", product: "heavy-armor", count: 233 },
    { icon: "https://wiki.factorio.com/images/thumb/Modular_armor.png/32px-Modular_armor.png", product: "modular-armor", count: 1514 },
    { icon: "https://wiki.factorio.com/images/thumb/Power_armor.png/32px-Power_armor.png", product: "power-armor", count: 8867 },
    { icon: "https://wiki.factorio.com/images/thumb/Power_armor_MK2.png/32px-Power_armor_MK2.png", product: "power-armor-mk2", count: 74829 },
    { icon: "https://wiki.factorio.com/images/thumb/Mech_armor.png/32px-Mech_armor.png", product: "mech-armor", count: 96465 },
    { icon: "https://wiki.factorio.com/images/thumb/Portable_solar_panel.png/32px-Portable_solar_panel.png", product: "solar-panel-equipment", count: 346 },
    { icon: "https://wiki.factorio.com/images/thumb/Portable_fission_reactor.png/32px-Portable_fission_reactor.png", product: "fission-reactor-equipment", count: 40359 },
    { icon: "https://wiki.factorio.com/images/thumb/Portable_fusion_reactor.png/32px-Portable_fusion_reactor.png", product: "fusion-reactor-equipment", count: 121240 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_battery.png/32px-Personal_battery.png", product: "battery-equipment", count: 223 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_battery_MK2.png/32px-Personal_battery_MK2.png", product: "battery-mk2-equipment", count: 4184 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_battery_MK3.png/32px-Personal_battery_MK3.png", product: "battery-mk3-equipment", count: 20792 },
    { icon: "https://wiki.factorio.com/images/thumb/Belt_immunity_equipment.png/32px-Belt_immunity_equipment.png", product: "belt-immunity-equipment", count: 284 },
    { icon: "https://wiki.factorio.com/images/thumb/Exoskeleton.png/32px-Exoskeleton.png", product: "exoskeleton-equipment", count: 4003 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_roboport.png/32px-Personal_roboport.png", product: "personal-roboport-equipment", count: 1130 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_roboport_MK2.png/32px-Personal_roboport_MK2.png", product: "personal-roboport-mk2-equipment", count: 14787 },
    { icon: "https://wiki.factorio.com/images/thumb/Nightvision.png/32px-Nightvision.png", product: "night-vision-equipment", count: 284 },
    { icon: "https://wiki.factorio.com/images/thumb/Toolbelt_equipment.png/32px-Toolbelt_equipment.png", product: "toolbelt-equipment", count: 160 },
    { icon: "https://wiki.factorio.com/images/thumb/Energy_shield.png/32px-Energy_shield.png", product: "energy-shield-equipment", count: 284 },
    { icon: "https://wiki.factorio.com/images/thumb/Energy_shield_MK2.png/32px-Energy_shield_MK2.png", product: "energy-shield-mk2-equipment", count: 3978 },
    { icon: "https://wiki.factorio.com/images/thumb/Personal_laser_defense.png/32px-Personal_laser_defense.png", product: "personal-laser-defense-equipment", count: 5591 },
    { icon: "https://wiki.factorio.com/images/thumb/Discharge_defense.png/32px-Discharge_defense.png", product: "discharge-defense-equipment", count: 4426 },
    { icon: "https://wiki.factorio.com/images/thumb/Wall.png/32px-Wall.png", product: "stone-wall", count: 30 },
    { icon: "https://wiki.factorio.com/images/thumb/Gate.png/32px-Gate.png", product: "gate", count: 46 },
    { icon: "https://wiki.factorio.com/images/thumb/Radar.png/32px-Radar.png", product: "radar", count: 58 },
    { icon: "https://wiki.factorio.com/images/thumb/Land_mine.png/32px-Land_mine.png", product: "land-mine", count: 10 },
    { icon: "https://wiki.factorio.com/images/thumb/Gun_turret.png/32px-Gun_turret.png", product: "gun-turret", count: 66 },
    { icon: "https://wiki.factorio.com/images/thumb/Laser_turret.png/32px-Laser_turret.png", product: "laser-turret", count: 344 },
    { icon: "https://wiki.factorio.com/images/thumb/Flamethrower_turret.png/32px-Flamethrower_turret.png", product: "flamethrower-turret", count: 362 },
    { icon: "https://wiki.factorio.com/images/thumb/Artillery_turret.png/32px-Artillery_turret.png", product: "artillery-turret", count: 8604 },
    { icon: "https://wiki.factorio.com/images/thumb/Rocket_turret.png/32px-Rocket_turret.png", product: "rocket-turret", count: 1054 },
    { icon: "https://wiki.factorio.com/images/thumb/Tesla_turret.png/32px-Tesla_turret.png", product: "tesla-turret", count: 7364 },
    { icon: "https://wiki.factorio.com/images/thumb/Railgun_turret.png/32px-Railgun_turret.png", product: "railgun-turret", count: 25568 }
];

function updateHalfValue() {
    const numRows = parseInt(document.getElementById('num-rows').value, 10) || 0;
    document.getElementById('half-value').textContent = `(${Math.floor(numRows / 2)})`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateHalfValue();
    generateRows();
});

function openDropdown(target) {
    currentDropdownTarget = target;
    currentPage = 1;
    renderDropdown();
    document.getElementById('dropdown-modal').style.display = 'block';
}

function closeDropdown() {
    document.getElementById('dropdown-modal').style.display = 'none';
}

function renderDropdown() {
    const container = document.getElementById('dropdown-items');
    container.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.innerHTML = `<img src="${item.icon}" alt="${item.product}"/><span>${item.product}</span>`;
        div.onclick = () => selectItem(item);
        container.appendChild(div);
    });
}

function toggleSecondSentences() {
    const isChecked = document.getElementById('toggle-second-sentences').checked;
    const rows = document.querySelectorAll('.row:nth-child(2n)');
    rows.forEach(row => {
        row.style.display = isChecked ? 'none' : '';
    });
}

function generateRows() {
    const numRows = parseInt(document.getElementById('num-rows').value, 10);
    const container = document.getElementById('rows-container');
    const existingRows = container.querySelectorAll('.row').length;
    
    for (let i = existingRows; i < numRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        if (Math.floor(i / 2) % 2 === 1) {
            rowDiv.style.backgroundColor = '#696969'; 
        }

        rowDiv.innerHTML = `
            <div>
                <label>Что мы будем покупать (item):</label>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="text" class="price-item" readonly value="coin" onclick="openDropdown(this)" />
                    <img src="" alt="Item icon" class="price-item-icon" style="width: 32px; height: 32px; display: none;" />
                </div>
                <label>Количество:</label>
                <input type="number" class="price-count" value="1" />
                <label>Качество:</label>
                <select class="price-quality">
                    <option value="normal">normal</option>
                    <option value="uncommon">uncommon</option>
                    <option value="rare">rare</option>
                    <option value="epic">epic</option>
                    <option value="legendary">legendary</option>
                </select>
            </div>
            <div>
                <label>Что мы будем отдавать (item):</label>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="text" class="offer-item" readonly value="coin" onclick="openDropdown(this)" />
                    <img src="https://i.ibb.co/ZG3wCR1/coin.png" 
                         alt="Item icon" class="offer-item-icon" style="width: 32px; height: 32px;" />
                </div>
                <label>Количество:</label>
                <input type="number" class="offer-count" value="1" />
                <label>Качество:</label>
                <select class="offer-quality">
                    <option value="normal">normal</option>
                    <option value="uncommon">uncommon</option>
                    <option value="rare">rare</option>
                    <option value="epic">epic</option>
                    <option value="legendary">legendary</option>
                </select>
            </div>
        `;

        container.appendChild(rowDiv);
    }
}

function selectItem(item) {
    if (currentDropdownTarget) {
        currentDropdownTarget.value = item.product;

        const row = currentDropdownTarget.closest('.row');
        const isBuying = currentDropdownTarget.classList.contains('price-item');
        const iconElement = isBuying
            ? row.querySelector('.price-item-icon')
            : row.querySelector('.offer-item-icon');

        iconElement.src = item.icon;
        iconElement.style.display = 'block';

        if (isBuying) {
            const offerCountInput = row.querySelector('.offer-count');
            offerCountInput.value = item.count;

            const nextRow = row.nextElementSibling;
            if (nextRow) {
                const nextOfferItem = nextRow.querySelector('.offer-item');
                const nextPriceCount = nextRow.querySelector('.price-count');

                nextOfferItem.value = item.product;

                const nextOfferIcon = nextRow.querySelector('.offer-item-icon');
                nextOfferIcon.src = item.icon;
                nextOfferIcon.style.display = 'block';

                nextPriceCount.value = item.count;
            }
        }
    }
    closeDropdown();
}

function toggleCodeTags() {
    const output = document.getElementById('output');
    const text = output.value;

    if (text.startsWith('[code]') && text.endsWith('[/code]')) {
        output.value = text.slice(6, -7).trim();
    } else {
        output.value = `[code]${text}[/code]`;
    }
}

function generateCode() {
    const qualityPercentages = document.getElementById('quality-percentages').value.split(',').map(Number);
    const discountPercentage = parseFloat(document.getElementById('discount-percentage').value) || 0;
    const discountMultiplier = (100 - discountPercentage) / 100;

    const rows = document.querySelectorAll('.row');
    let outputItems = '';

    rows.forEach((row, index) => {
        const priceItem = row.querySelector('.price-item').value;
        const priceCount = row.querySelector('.price-count').value;
        const priceQuality = row.querySelector('.price-quality').value;
        const offerItem = row.querySelector('.offer-item').value;
        const offerCount = row.querySelector('.offer-count').value;
        const offerQuality = row.querySelector('.offer-quality').value;

        const qualityIndex = ['normal', 'uncommon', 'rare', 'epic', 'legendary'];
        const qualityMultiplier = (quality) => {
            const index = qualityIndex.indexOf(quality);
            return index >= 0 ? (1 + qualityPercentages[index] / 100) : 1;
        };

        const adjustedPriceCount = Math.ceil(priceCount * qualityMultiplier(offerQuality));
        const priceObject = `{{name = \"${priceItem}\", count = ${adjustedPriceCount}` +
            (priceQuality !== 'normal' ? `, quality = \"${priceQuality}\"` : '') +
            `}}`;

        const isSecondSentence = index % 2 === 1; 
        const adjustedCount = isSecondSentence ? offerCount : Math.floor(offerCount * discountMultiplier);
        const adjustedOfferCount = Math.ceil(adjustedCount * qualityMultiplier(priceQuality));
        const offerObject = `{type = \"give-item\", item = \"${offerItem}\", count = ${adjustedOfferCount}` +
            (offerQuality !== 'normal' ? `, quality = \"${offerQuality}\"` : '') +
            `}`;

        outputItems += `{price = ${priceObject}, offer = ${offerObject}}`;

        if (index < rows.length - 1) {
            outputItems += ', ';
        }
    });

    let output = `/c local player = game.player local surface = player.surface local market_location = {x = player.position.x, y = player.position.y - 3} local market = surface.create_entity{name = \"market\", position = market_location, force = player.force} local items = { ${outputItems} } for _, item in ipairs(items) do market.add_market_item(item) end`;

    document.getElementById('output').value = output;
}

function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Код маркета скопирован');
}

function filterItems() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let dropdownItems = document.querySelectorAll(".dropdown-item");
    
    dropdownItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "flex" : "none";
    });
}
