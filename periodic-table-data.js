// periodic-table-data.js
// Storing element data as an array of objects is more manageable and flexible
// for applications, especially those involving animations or dynamic displays.

const elementData = [
  // --- Period 1 ---
  {
    atomicNumber: 1, symbol: 'H', name: 'Hydrogen', atomicMass: '1.008', category: 'diatomic-nonmetal',
    period: 1, group: 1, block: 's',
    electronConfiguration: '1s1', electronsPerShell: '1',
    standardState: 'Gas', density: 0.08988, meltingPoint: 13.99, boilingPoint: 20.271,
    electronegativityPauling: 2.20, ionizationEnergy: 1312.0
  },
  {
    atomicNumber: 2, symbol: 'He', name: 'Helium', atomicMass: '4.0026', category: 'noble-gas',
    period: 1, group: 18, block: 's',
    electronConfiguration: '1s2', electronsPerShell: '2',
    standardState: 'Gas', density: 0.1786, meltingPoint: null, boilingPoint: 4.22, // Helium does not solidify at standard pressure
    electronegativityPauling: null, ionizationEnergy: 2372.3
  },
  // --- Period 2 ---
  {
    atomicNumber: 3, symbol: 'Li', name: 'Lithium', atomicMass: '6.94', category: 'alkali-metal',
    period: 2, group: 1, block: 's',
    electronConfiguration: '[He] 2s1', electronsPerShell: '2,1',
    standardState: 'Solid', density: 0.534, meltingPoint: 453.65, boilingPoint: 1615,
    electronegativityPauling: 0.98, ionizationEnergy: 520.2
  },
  {
    atomicNumber: 4, symbol: 'Be', name: 'Beryllium', atomicMass: '9.0122', category: 'alkaline-earth-metal',
    period: 2, group: 2, block: 's',
    electronConfiguration: '[He] 2s2', electronsPerShell: '2,2',
    standardState: 'Solid', density: 1.85, meltingPoint: 1560, boilingPoint: 2742,
    electronegativityPauling: 1.57, ionizationEnergy: 899.5
  },
  {
    atomicNumber: 5, symbol: 'B', name: 'Boron', atomicMass: '10.81', category: 'metalloid',
    period: 2, group: 13, block: 'p',
    electronConfiguration: '[He] 2s2 2p1', electronsPerShell: '2,3',
    standardState: 'Solid', density: 2.34, meltingPoint: 2349, boilingPoint: 4200,
    electronegativityPauling: 2.04, ionizationEnergy: 800.6
  },
  {
    atomicNumber: 6, symbol: 'C', name: 'Carbon', atomicMass: '12.011', category: 'polyatomic-nonmetal',
    period: 2, group: 14, block: 'p',
    electronConfiguration: '[He] 2s2 2p2', electronsPerShell: '2,4',
    standardState: 'Solid', density: 2.267, // For graphite, varies for allotropes (e.g., diamond is 3.515)
    meltingPoint: 3800, // Sublimes at standard pressure
    boilingPoint: 5100, // Sublimation point
    electronegativityPauling: 2.55, ionizationEnergy: 1086.5
  },
  {
    atomicNumber: 7, symbol: 'N', name: 'Nitrogen', atomicMass: '14.007', category: 'diatomic-nonmetal',
    period: 2, group: 15, block: 'p',
    electronConfiguration: '[He] 2s2 2p3', electronsPerShell: '2,5',
    standardState: 'Gas', density: 1.251, meltingPoint: 63.15, boilingPoint: 77.36,
    electronegativityPauling: 3.04, ionizationEnergy: 1402.3
  },
  {
    atomicNumber: 8, symbol: 'O', name: 'Oxygen', atomicMass: '15.999', category: 'diatomic-nonmetal',
    period: 2, group: 16, block: 'p',
    electronConfiguration: '[He] 2s2 2p4', electronsPerShell: '2,6',
    standardState: 'Gas', density: 1.429, meltingPoint: 54.36, boilingPoint: 90.188,
    electronegativityPauling: 3.44, ionizationEnergy: 1313.9
  },
  {
    atomicNumber: 9, symbol: 'F', name: 'Fluorine', atomicMass: '18.998', category: 'halogen', // technically diatomic-nonmetal, often classed as halogen
    period: 2, group: 17, block: 'p',
    electronConfiguration: '[He] 2s2 2p5', electronsPerShell: '2,7',
    standardState: 'Gas', density: 1.696, meltingPoint: 53.48, boilingPoint: 85.03,
    electronegativityPauling: 3.98, ionizationEnergy: 1681.0
  },
  {
    atomicNumber: 10, symbol: 'Ne', name: 'Neon', atomicMass: '20.180', category: 'noble-gas',
    period: 2, group: 18, block: 'p',
    electronConfiguration: '[He] 2s2 2p6', electronsPerShell: '2,8',
    standardState: 'Gas', density: 0.9002, meltingPoint: 24.56, boilingPoint: 27.104,
    electronegativityPauling: null, ionizationEnergy: 2080.7
  },
  // --- Period 3 ---
  {
    atomicNumber: 11, symbol: 'Na', name: 'Sodium', atomicMass: '22.990', category: 'alkali-metal',
    period: 3, group: 1, block: 's',
    electronConfiguration: '[Ne] 3s1', electronsPerShell: '2,8,1',
    standardState: 'Solid', density: 0.968, meltingPoint: 370.944, boilingPoint: 1156.09,
    electronegativityPauling: 0.93, ionizationEnergy: 495.8
  },
  {
    atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: '24.305', category: 'alkaline-earth-metal',
    period: 3, group: 2, block: 's',
    electronConfiguration: '[Ne] 3s2', electronsPerShell: '2,8,2',
    standardState: 'Solid', density: 1.738, meltingPoint: 923, boilingPoint: 1363,
    electronegativityPauling: 1.31, ionizationEnergy: 737.7
  },
  {
    atomicNumber: 13, symbol: 'Al', name: 'Aluminium', atomicMass: '26.982', category: 'post-transition-metal',
    period: 3, group: 13, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p1', electronsPerShell: '2,8,3',
    standardState: 'Solid', density: 2.70, meltingPoint: 933.47, boilingPoint: 2792,
    electronegativityPauling: 1.61, ionizationEnergy: 577.5
  },
  {
    atomicNumber: 14, symbol: 'Si', name: 'Silicon', atomicMass: '28.085', category: 'metalloid',
    period: 3, group: 14, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p2', electronsPerShell: '2,8,4',
    standardState: 'Solid', density: 2.329, meltingPoint: 1687, boilingPoint: 3538,
    electronegativityPauling: 1.90, ionizationEnergy: 786.5
  },
  {
    atomicNumber: 15, symbol: 'P', name: 'Phosphorus', atomicMass: '30.974', category: 'polyatomic-nonmetal',
    period: 3, group: 15, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p3', electronsPerShell: '2,8,5',
    standardState: 'Solid', density: 1.823, // White phosphorus, varies for allotropes
    meltingPoint: 317.3, // White phosphorus
    boilingPoint: 553.7, // White phosphorus
    electronegativityPauling: 2.19, ionizationEnergy: 1011.8
  },
  {
    atomicNumber: 16, symbol: 'S', name: 'Sulfur', atomicMass: '32.06', category: 'polyatomic-nonmetal',
    period: 3, group: 16, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p4', electronsPerShell: '2,8,6',
    standardState: 'Solid', density: 2.07, // Alpha sulfur, varies for allotropes
    meltingPoint: 388.36, // Alpha sulfur
    boilingPoint: 717.8,
    electronegativityPauling: 2.58, ionizationEnergy: 999.6
  },
  {
    atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: '35.45', category: 'halogen', // technically diatomic-nonmetal, often classed as halogen
    period: 3, group: 17, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p5', electronsPerShell: '2,8,7',
    standardState: 'Gas', density: 3.214, meltingPoint: 171.6, boilingPoint: 239.11,
    electronegativityPauling: 3.16, ionizationEnergy: 1251.2
  },
  {
    atomicNumber: 18, symbol: 'Ar', name: 'Argon', atomicMass: '39.948', category: 'noble-gas',
    period: 3, group: 18, block: 'p',
    electronConfiguration: '[Ne] 3s2 3p6', electronsPerShell: '2,8,8',
    standardState: 'Gas', density: 1.784, meltingPoint: 83.81, boilingPoint: 87.302,
    electronegativityPauling: null, ionizationEnergy: 1520.6
  },
  // --- Period 4 ---
  {
    atomicNumber: 19, symbol: 'K', name: 'Potassium', atomicMass: '39.098', category: 'alkali-metal',
    period: 4, group: 1, block: 's',
    electronConfiguration: '[Ar] 4s1', electronsPerShell: '2,8,8,1',
    standardState: 'Solid', density: 0.862, meltingPoint: 336.7, boilingPoint: 1032,
    electronegativityPauling: 0.82, ionizationEnergy: 418.8
  },
  {
    atomicNumber: 20, symbol: 'Ca', name: 'Calcium', atomicMass: '40.078', category: 'alkaline-earth-metal',
    period: 4, group: 2, block: 's',
    electronConfiguration: '[Ar] 4s2', electronsPerShell: '2,8,8,2',
    standardState: 'Solid', density: 1.55, meltingPoint: 1115, boilingPoint: 1757,
    electronegativityPauling: 1.00, ionizationEnergy: 589.8
  },
  {
    atomicNumber: 21, symbol: 'Sc', name: 'Scandium', atomicMass: '44.956', category: 'transition-metal',
    period: 4, group: 3, block: 'd',
    electronConfiguration: '[Ar] 3d1 4s2', electronsPerShell: '2,8,9,2',
    standardState: 'Solid', density: 2.985, meltingPoint: 1814, boilingPoint: 3109,
    electronegativityPauling: 1.36, ionizationEnergy: 633.1
  },
  {
    atomicNumber: 22, symbol: 'Ti', name: 'Titanium', atomicMass: '47.867', category: 'transition-metal',
    period: 4, group: 4, block: 'd',
    electronConfiguration: '[Ar] 3d2 4s2', electronsPerShell: '2,8,10,2',
    standardState: 'Solid', density: 4.506, meltingPoint: 1941, boilingPoint: 3560,
    electronegativityPauling: 1.54, ionizationEnergy: 658.8
  },
  {
    atomicNumber: 23, symbol: 'V', name: 'Vanadium', atomicMass: '50.942', category: 'transition-metal',
    period: 4, group: 5, block: 'd',
    electronConfiguration: '[Ar] 3d3 4s2', electronsPerShell: '2,8,11,2',
    standardState: 'Solid', density: 6.11, meltingPoint: 2183, boilingPoint: 3680,
    electronegativityPauling: 1.63, ionizationEnergy: 650.9
  },
  {
    atomicNumber: 24, symbol: 'Cr', name: 'Chromium', atomicMass: '51.996', category: 'transition-metal',
    period: 4, group: 6, block: 'd',
    electronConfiguration: '[Ar] 3d5 4s1', electronsPerShell: '2,8,13,1', // Exception to Aufbau principle
    standardState: 'Solid', density: 7.19, meltingPoint: 2180, boilingPoint: 2944,
    electronegativityPauling: 1.66, ionizationEnergy: 652.9
  },
  {
    atomicNumber: 25, symbol: 'Mn', name: 'Manganese', atomicMass: '54.938', category: 'transition-metal',
    period: 4, group: 7, block: 'd',
    electronConfiguration: '[Ar] 3d5 4s2', electronsPerShell: '2,8,13,2',
    standardState: 'Solid', density: 7.21, meltingPoint: 1519, boilingPoint: 2334,
    electronegativityPauling: 1.55, ionizationEnergy: 717.3
  },
  {
    atomicNumber: 26, symbol: 'Fe', name: 'Iron', atomicMass: '55.845', category: 'transition-metal',
    period: 4, group: 8, block: 'd',
    electronConfiguration: '[Ar] 3d6 4s2', electronsPerShell: '2,8,14,2',
    standardState: 'Solid', density: 7.874, meltingPoint: 1811, boilingPoint: 3134,
    electronegativityPauling: 1.83, ionizationEnergy: 762.5
  },
  {
    atomicNumber: 27, symbol: 'Co', name: 'Cobalt', atomicMass: '58.933', category: 'transition-metal',
    period: 4, group: 9, block: 'd',
    electronConfiguration: '[Ar] 3d7 4s2', electronsPerShell: '2,8,15,2',
    standardState: 'Solid', density: 8.90, meltingPoint: 1768, boilingPoint: 3200,
    electronegativityPauling: 1.88, ionizationEnergy: 760.4
  },
  {
    atomicNumber: 28, symbol: 'Ni', name: 'Nickel', atomicMass: '58.693', category: 'transition-metal',
    period: 4, group: 10, block: 'd',
    electronConfiguration: '[Ar] 3d8 4s2', electronsPerShell: '2,8,16,2', // Often written as [Ar] 3d10 but 3d8 4s2 is ground state
    standardState: 'Solid', density: 8.908, meltingPoint: 1728, boilingPoint: 3186,
    electronegativityPauling: 1.91, ionizationEnergy: 737.1
  },
  {
    atomicNumber: 29, symbol: 'Cu', name: 'Copper', atomicMass: '63.546', category: 'transition-metal',
    period: 4, group: 11, block: 'd',
    electronConfiguration: '[Ar] 3d10 4s1', electronsPerShell: '2,8,18,1', // Exception to Aufbau principle
    standardState: 'Solid', density: 8.96, meltingPoint: 1357.77, boilingPoint: 2835,
    electronegativityPauling: 1.90, ionizationEnergy: 745.5
  },
  {
    atomicNumber: 30, symbol: 'Zn', name: 'Zinc', atomicMass: '65.38', category: 'transition-metal', // Sometimes considered post-transition
    period: 4, group: 12, block: 'd',
    electronConfiguration: '[Ar] 3d10 4s2', electronsPerShell: '2,8,18,2',
    standardState: 'Solid', density: 7.14, meltingPoint: 692.68, boilingPoint: 1180,
    electronegativityPauling: 1.65, ionizationEnergy: 906.4
  },
  {
    atomicNumber: 31, symbol: 'Ga', name: 'Gallium', atomicMass: '69.723', category: 'post-transition-metal',
    period: 4, group: 13, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p1', electronsPerShell: '2,8,18,3',
    standardState: 'Solid', density: 5.91, meltingPoint: 302.9146, boilingPoint: 2477,
    electronegativityPauling: 1.81, ionizationEnergy: 578.8
  },
  {
    atomicNumber: 32, symbol: 'Ge', name: 'Germanium', atomicMass: '72.63', category: 'metalloid',
    period: 4, group: 14, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p2', electronsPerShell: '2,8,18,4',
    standardState: 'Solid', density: 5.323, meltingPoint: 1211.40, boilingPoint: 3106,
    electronegativityPauling: 2.01, ionizationEnergy: 762
  },
  {
    atomicNumber: 33, symbol: 'As', name: 'Arsenic', atomicMass: '74.922', category: 'metalloid',
    period: 4, group: 15, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p3', electronsPerShell: '2,8,18,5',
    standardState: 'Solid', density: 5.727, // Gray arsenic
    meltingPoint: 1090, // Sublimes at 887 K at standard pressure
    boilingPoint: 887, // Sublimation point
    electronegativityPauling: 2.18, ionizationEnergy: 947.0
  },
  {
    atomicNumber: 34, symbol: 'Se', name: 'Selenium', atomicMass: '78.971', category: 'polyatomic-nonmetal', // Can also be classed as metalloid
    period: 4, group: 16, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p4', electronsPerShell: '2,8,18,6',
    standardState: 'Solid', density: 4.81, // Gray selenium
    meltingPoint: 494, // Gray selenium
    boilingPoint: 958,
    electronegativityPauling: 2.55, ionizationEnergy: 941.0
  },
  {
    atomicNumber: 35, symbol: 'Br', name: 'Bromine', atomicMass: '79.904', category: 'halogen', // technically diatomic-nonmetal, often classed as halogen
    period: 4, group: 17, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p5', electronsPerShell: '2,8,18,7',
    standardState: 'Liquid', density: 3.12, meltingPoint: 265.8, boilingPoint: 332.0,
    electronegativityPauling: 2.96, ionizationEnergy: 1139.9
  },
  {
    atomicNumber: 36, symbol: 'Kr', name: 'Krypton', atomicMass: '83.798', category: 'noble-gas',
    period: 4, group: 18, block: 'p',
    electronConfiguration: '[Ar] 3d10 4s2 4p6', electronsPerShell: '2,8,18,8',
    standardState: 'Gas', density: 3.749, meltingPoint: 115.78, boilingPoint: 119.93,
    electronegativityPauling: 3.0, // Pauling scale value exists, though often considered chemically inert
    ionizationEnergy: 1350.8
  },
  // --- Period 5 ---
  {
    atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', atomicMass: '85.468', category: 'alkali-metal',
    period: 5, group: 1, block: 's',
    electronConfiguration: '[Kr] 5s1', electronsPerShell: '2,8,18,8,1',
    standardState: 'Solid', density: 1.532, meltingPoint: 312.45, boilingPoint: 961,
    electronegativityPauling: 0.82, ionizationEnergy: 403.0
  },
  {
    atomicNumber: 38, symbol: 'Sr', name: 'Strontium', atomicMass: '87.62', category: 'alkaline-earth-metal',
    period: 5, group: 2, block: 's',
    electronConfiguration: '[Kr] 5s2', electronsPerShell: '2,8,18,8,2',
    standardState: 'Solid', density: 2.64, meltingPoint: 1050, boilingPoint: 1655,
    electronegativityPauling: 0.95, ionizationEnergy: 549.5
  },
  {
    atomicNumber: 39, symbol: 'Y', name: 'Yttrium', atomicMass: '88.906', category: 'transition-metal',
    period: 5, group: 3, block: 'd',
    electronConfiguration: '[Kr] 4d1 5s2', electronsPerShell: '2,8,18,9,2',
    standardState: 'Solid', density: 4.472, meltingPoint: 1799, boilingPoint: 3609,
    electronegativityPauling: 1.22, ionizationEnergy: 600
  },
  {
    atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', atomicMass: '91.224', category: 'transition-metal',
    period: 5, group: 4, block: 'd',
    electronConfiguration: '[Kr] 4d2 5s2', electronsPerShell: '2,8,18,10,2',
    standardState: 'Solid', density: 6.52, meltingPoint: 2128, boilingPoint: 4682,
    electronegativityPauling: 1.33, ionizationEnergy: 640.1
  },
  {
    atomicNumber: 41, symbol: 'Nb', name: 'Niobium', atomicMass: '92.906', category: 'transition-metal',
    period: 5, group: 5, block: 'd',
    electronConfiguration: '[Kr] 4d4 5s1', electronsPerShell: '2,8,18,12,1', // Exception
    standardState: 'Solid', density: 8.57, meltingPoint: 2750, boilingPoint: 5017,
    electronegativityPauling: 1.6, ionizationEnergy: 652.1
  },
  {
    atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', atomicMass: '95.96', category: 'transition-metal',
    period: 5, group: 6, block: 'd',
    electronConfiguration: '[Kr] 4d5 5s1', electronsPerShell: '2,8,18,13,1', // Exception
    standardState: 'Solid', density: 10.28, meltingPoint: 2896, boilingPoint: 4912,
    electronegativityPauling: 2.16, ionizationEnergy: 684.3
  },
  {
    atomicNumber: 43, symbol: 'Tc', name: 'Technetium', atomicMass: '(98)', category: 'transition-metal',
    period: 5, group: 7, block: 'd',
    electronConfiguration: '[Kr] 4d5 5s2', electronsPerShell: '2,8,18,13,2', // Predicted/simplified
    standardState: 'Solid', density: 11.5, meltingPoint: 2430, boilingPoint: 4538,
    electronegativityPauling: 1.9, ionizationEnergy: 702
  },
  {
    atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', atomicMass: '101.07', category: 'transition-metal',
    period: 5, group: 8, block: 'd',
    electronConfiguration: '[Kr] 4d7 5s1', electronsPerShell: '2,8,18,15,1', // Exception
    standardState: 'Solid', density: 12.45, meltingPoint: 2607, boilingPoint: 4423,
    electronegativityPauling: 2.2, ionizationEnergy: 710.2
  },
  {
    atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', atomicMass: '102.91', category: 'transition-metal',
    period: 5, group: 9, block: 'd',
    electronConfiguration: '[Kr] 4d8 5s1', electronsPerShell: '2,8,18,16,1', // Exception
    standardState: 'Solid', density: 12.41, meltingPoint: 2237, boilingPoint: 3968,
    electronegativityPauling: 2.28, ionizationEnergy: 719.7
  },
  {
    atomicNumber: 46, symbol: 'Pd', name: 'Palladium', atomicMass: '106.42', category: 'transition-metal',
    period: 5, group: 10, block: 'd',
    electronConfiguration: '[Kr] 4d10', electronsPerShell: '2,8,18,18,0', // Exception
    standardState: 'Solid', density: 12.023, meltingPoint: 1828.05, boilingPoint: 3236,
    electronegativityPauling: 2.20, ionizationEnergy: 804.4
  },
  {
    atomicNumber: 47, symbol: 'Ag', name: 'Silver', atomicMass: '107.87', category: 'transition-metal',
    period: 5, group: 11, block: 'd',
    electronConfiguration: '[Kr] 4d10 5s1', electronsPerShell: '2,8,18,18,1', // Exception
    standardState: 'Solid', density: 10.49, meltingPoint: 1234.93, boilingPoint: 2435,
    electronegativityPauling: 1.93, ionizationEnergy: 731.0
  },
  {
    atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', atomicMass: '112.41', category: 'transition-metal', // Sometimes considered post-transition
    period: 5, group: 12, block: 'd',
    electronConfiguration: '[Kr] 4d10 5s2', electronsPerShell: '2,8,18,18,2',
    standardState: 'Solid', density: 8.65, meltingPoint: 594.22, boilingPoint: 1040,
    electronegativityPauling: 1.69, ionizationEnergy: 867.8
  },
  {
    atomicNumber: 49, symbol: 'In', name: 'Indium', atomicMass: '114.82', category: 'post-transition-metal',
    period: 5, group: 13, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p1', electronsPerShell: '2,8,18,18,3',
    standardState: 'Solid', density: 7.31, meltingPoint: 429.7485, boilingPoint: 2345,
    electronegativityPauling: 1.78, ionizationEnergy: 558.3
  },
  {
    atomicNumber: 50, symbol: 'Sn', name: 'Tin', atomicMass: '118.71', category: 'post-transition-metal',
    period: 5, group: 14, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p2', electronsPerShell: '2,8,18,18,4',
    standardState: 'Solid', density: 7.31, // White tin
    meltingPoint: 505.08, // White tin
    boilingPoint: 2875,
    electronegativityPauling: 1.96, ionizationEnergy: 708.6
  },
  {
    atomicNumber: 51, symbol: 'Sb', name: 'Antimony', atomicMass: '121.76', category: 'metalloid',
    period: 5, group: 15, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p3', electronsPerShell: '2,8,18,18,5',
    standardState: 'Solid', density: 6.697, // Gray form
    meltingPoint: 903.78,
    boilingPoint: 1860,
    electronegativityPauling: 2.05, ionizationEnergy: 834
  },
  {
    atomicNumber: 52, symbol: 'Te', name: 'Tellurium', atomicMass: '127.60', category: 'metalloid',
    period: 5, group: 16, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p4', electronsPerShell: '2,8,18,18,6',
    standardState: 'Solid', density: 6.24,
    meltingPoint: 722.66,
    boilingPoint: 1261,
    electronegativityPauling: 2.1, ionizationEnergy: 869.3
  },
  {
    atomicNumber: 53, symbol: 'I', name: 'Iodine', atomicMass: '126.90', category: 'halogen', // technically diatomic-nonmetal, often classed as halogen
    period: 5, group: 17, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p5', electronsPerShell: '2,8,18,18,7',
    standardState: 'Solid', density: 4.933,
    meltingPoint: 386.85,
    boilingPoint: 457.4,
    electronegativityPauling: 2.66, ionizationEnergy: 1008.4
  },
  {
    atomicNumber: 54, symbol: 'Xe', name: 'Xenon', atomicMass: '131.29', category: 'noble-gas',
    period: 5, group: 18, block: 'p',
    electronConfiguration: '[Kr] 4d10 5s2 5p6', electronsPerShell: '2,8,18,18,8',
    standardState: 'Gas', density: 5.894,
    meltingPoint: 161.4,
    boilingPoint: 165.051,
    electronegativityPauling: 2.6, // Pauling scale value exists
    ionizationEnergy: 1170.4
  },
  // --- Period 6 ---
  {
    atomicNumber: 55, symbol: 'Cs', name: 'Caesium', atomicMass: '132.91', category: 'alkali-metal',
    period: 6, group: 1, block: 's',
    electronConfiguration: '[Xe] 6s1', electronsPerShell: '2,8,18,18,8,1',
    standardState: 'Solid', density: 1.879, meltingPoint: 301.7, boilingPoint: 944,
    electronegativityPauling: 0.79, ionizationEnergy: 375.7
  },
  {
    atomicNumber: 56, symbol: 'Ba', name: 'Barium', atomicMass: '137.33', category: 'alkaline-earth-metal',
    period: 6, group: 2, block: 's',
    electronConfiguration: '[Xe] 6s2', electronsPerShell: '2,8,18,18,8,2',
    standardState: 'Solid', density: 3.51, meltingPoint: 1000, boilingPoint: 2170,
    electronegativityPauling: 0.89, ionizationEnergy: 502.9
  },
  // Lanthanides start here
  {
    atomicNumber: 57, symbol: 'La', name: 'Lanthanum', atomicMass: '138.91', category: 'lanthanide', // Often grouped with Group 3
    period: 6, group: 3, block: 'f', // Often placed in d-block group 3 conceptually
    electronConfiguration: '[Xe] 5d1 6s2', electronsPerShell: '2,8,18,18,9,2',
    standardState: 'Solid', density: 6.146, meltingPoint: 1193, boilingPoint: 3737,
    electronegativityPauling: 1.10, ionizationEnergy: 538.1
  },
  {
    atomicNumber: 58, symbol: 'Ce', name: 'Cerium', atomicMass: '140.12', category: 'lanthanide',
    period: 6, group: null, block: 'f', // Group number not formally assigned for f-block
    electronConfiguration: '[Xe] 4f1 5d1 6s2', electronsPerShell: '2,8,18,19,9,2', // Complex configuration
    standardState: 'Solid', density: 6.770, meltingPoint: 1068, boilingPoint: 3716,
    electronegativityPauling: 1.12, ionizationEnergy: 534.4
  },
  {
    atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', atomicMass: '140.91', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f3 6s2', electronsPerShell: '2,8,18,21,8,2',
    standardState: 'Solid', density: 6.77, meltingPoint: 1208, boilingPoint: 3793,
    electronegativityPauling: 1.13, ionizationEnergy: 527
  },
  {
    atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', atomicMass: '144.24', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f4 6s2', electronsPerShell: '2,8,18,22,8,2',
    standardState: 'Solid', density: 7.01, meltingPoint: 1297, boilingPoint: 3347,
    electronegativityPauling: 1.14, ionizationEnergy: 533.1
  },
  {
    atomicNumber: 61, symbol: 'Pm', name: 'Promethium', atomicMass: '(145)', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f5 6s2', electronsPerShell: '2,8,18,23,8,2',
    standardState: 'Solid', density: 7.26, meltingPoint: 1315, boilingPoint: 3273,
    electronegativityPauling: 1.13, ionizationEnergy: 540
  },
  {
    atomicNumber: 62, symbol: 'Sm', name: 'Samarium', atomicMass: '150.36', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f6 6s2', electronsPerShell: '2,8,18,24,8,2',
    standardState: 'Solid', density: 7.52, meltingPoint: 1345, boilingPoint: 2067,
    electronegativityPauling: 1.17, ionizationEnergy: 544.5
  },
  {
    atomicNumber: 63, symbol: 'Eu', name: 'Europium', atomicMass: '151.96', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f7 6s2', electronsPerShell: '2,8,18,25,8,2',
    standardState: 'Solid', density: 5.244, meltingPoint: 1099, boilingPoint: 1802,
    electronegativityPauling: 1.2, ionizationEnergy: 547.1
  },
  {
    atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', atomicMass: '157.25', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f7 5d1 6s2', electronsPerShell: '2,8,18,25,9,2', // Exception
    standardState: 'Solid', density: 7.90, meltingPoint: 1585, boilingPoint: 3546,
    electronegativityPauling: 1.20, ionizationEnergy: 593.4
  },
  {
    atomicNumber: 65, symbol: 'Tb', name: 'Terbium', atomicMass: '158.93', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f9 6s2', electronsPerShell: '2,8,18,27,8,2',
    standardState: 'Solid', density: 8.23, meltingPoint: 1629, boilingPoint: 3503,
    electronegativityPauling: 1.2, ionizationEnergy: 565.8
  },
  {
    atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', atomicMass: '162.50', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f10 6s2', electronsPerShell: '2,8,18,28,8,2',
    standardState: 'Solid', density: 8.551, meltingPoint: 1680, boilingPoint: 2840,
    electronegativityPauling: 1.22, ionizationEnergy: 573.0
  },
  {
    atomicNumber: 67, symbol: 'Ho', name: 'Holmium', atomicMass: '164.93', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f11 6s2', electronsPerShell: '2,8,18,29,8,2',
    standardState: 'Solid', density: 8.79, meltingPoint: 1734, boilingPoint: 2993,
    electronegativityPauling: 1.23, ionizationEnergy: 581.0
  },
  {
    atomicNumber: 68, symbol: 'Er', name: 'Erbium', atomicMass: '167.26', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f12 6s2', electronsPerShell: '2,8,18,30,8,2',
    standardState: 'Solid', density: 9.066, meltingPoint: 1802, boilingPoint: 3141,
    electronegativityPauling: 1.24, ionizationEnergy: 589.3
  },
  {
    atomicNumber: 69, symbol: 'Tm', name: 'Thulium', atomicMass: '168.93', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f13 6s2', electronsPerShell: '2,8,18,31,8,2',
    standardState: 'Solid', density: 9.32, meltingPoint: 1818, boilingPoint: 2223,
    electronegativityPauling: 1.25, ionizationEnergy: 596.7
  },
  {
    atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', atomicMass: '173.05', category: 'lanthanide',
    period: 6, group: null, block: 'f',
    electronConfiguration: '[Xe] 4f14 6s2', electronsPerShell: '2,8,18,32,8,2',
    standardState: 'Solid', density: 6.90, meltingPoint: 1097, boilingPoint: 1469,
    electronegativityPauling: 1.1, ionizationEnergy: 603.4
  },
  {
    atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', atomicMass: '174.97', category: 'lanthanide', // Sometimes grouped with Group 3
    period: 6, group: 3, block: 'd', // Technically d-block, ends lanthanide series
    electronConfiguration: '[Xe] 4f14 5d1 6s2', electronsPerShell: '2,8,18,32,9,2',
    standardState: 'Solid', density: 9.841, meltingPoint: 1925, boilingPoint: 3675,
    electronegativityPauling: 1.27, ionizationEnergy: 523.5
  },
  // Back to d-block
  {
    atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', atomicMass: '178.49', category: 'transition-metal',
    period: 6, group: 4, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d2 6s2', electronsPerShell: '2,8,18,32,10,2',
    standardState: 'Solid', density: 13.31, meltingPoint: 2506, boilingPoint: 4876,
    electronegativityPauling: 1.3, ionizationEnergy: 658.5
  },
  {
    atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', atomicMass: '180.95', category: 'transition-metal',
    period: 6, group: 5, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d3 6s2', electronsPerShell: '2,8,18,32,11,2',
    standardState: 'Solid', density: 16.65, meltingPoint: 3290, boilingPoint: 5731,
    electronegativityPauling: 1.5, ionizationEnergy: 761
  },
  {
    atomicNumber: 74, symbol: 'W', name: 'Tungsten', atomicMass: '183.84', category: 'transition-metal',
    period: 6, group: 6, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d4 6s2', electronsPerShell: '2,8,18,32,12,2',
    standardState: 'Solid', density: 19.3, meltingPoint: 3695, boilingPoint: 5828,
    electronegativityPauling: 2.36, ionizationEnergy: 770
  },
  {
    atomicNumber: 75, symbol: 'Re', name: 'Rhenium', atomicMass: '186.21', category: 'transition-metal',
    period: 6, group: 7, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d5 6s2', electronsPerShell: '2,8,18,32,13,2',
    standardState: 'Solid', density: 21.02, meltingPoint: 3459, boilingPoint: 5869,
    electronegativityPauling: 1.9, ionizationEnergy: 760
  },
  {
    atomicNumber: 76, symbol: 'Os', name: 'Osmium', atomicMass: '190.23', category: 'transition-metal',
    period: 6, group: 8, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d6 6s2', electronsPerShell: '2,8,18,32,14,2',
    standardState: 'Solid', density: 22.59, meltingPoint: 3306, boilingPoint: 5285,
    electronegativityPauling: 2.2, ionizationEnergy: 840
  },
  {
    atomicNumber: 77, symbol: 'Ir', name: 'Iridium', atomicMass: '192.22', category: 'transition-metal',
    period: 6, group: 9, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d7 6s2', electronsPerShell: '2,8,18,32,15,2',
    standardState: 'Solid', density: 22.56, meltingPoint: 2719, boilingPoint: 4701,
    electronegativityPauling: 2.20, ionizationEnergy: 880
  },
  {
    atomicNumber: 78, symbol: 'Pt', name: 'Platinum', atomicMass: '195.08', category: 'transition-metal',
    period: 6, group: 10, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d9 6s1', electronsPerShell: '2,8,18,32,17,1', // Exception
    standardState: 'Solid', density: 21.45, meltingPoint: 2041.4, boilingPoint: 4098,
    electronegativityPauling: 2.28, ionizationEnergy: 870
  },
  {
    atomicNumber: 79, symbol: 'Au', name: 'Gold', atomicMass: '196.97', category: 'transition-metal',
    period: 6, group: 11, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d10 6s1', electronsPerShell: '2,8,18,32,18,1', // Exception
    standardState: 'Solid', density: 19.30, meltingPoint: 1337.33, boilingPoint: 3129,
    electronegativityPauling: 2.54, ionizationEnergy: 890.1
  },
  {
    atomicNumber: 80, symbol: 'Hg', name: 'Mercury', atomicMass: '200.59', category: 'transition-metal', // Sometimes considered post-transition
    period: 6, group: 12, block: 'd',
    electronConfiguration: '[Xe] 4f14 5d10 6s2', electronsPerShell: '2,8,18,32,18,2',
    standardState: 'Liquid', density: 13.534, meltingPoint: 234.321, boilingPoint: 629.88,
    electronegativityPauling: 2.00, ionizationEnergy: 1007.1
  },
  {
    atomicNumber: 81, symbol: 'Tl', name: 'Thallium', atomicMass: '204.38', category: 'post-transition-metal',
    period: 6, group: 13, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p1', electronsPerShell: '2,8,18,32,18,3',
    standardState: 'Solid', density: 11.85, meltingPoint: 577, boilingPoint: 1746,
    electronegativityPauling: 1.62, ionizationEnergy: 589.4
  },
  {
    atomicNumber: 82, symbol: 'Pb', name: 'Lead', atomicMass: '207.2', category: 'post-transition-metal',
    period: 6, group: 14, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2', electronsPerShell: '2,8,18,32,18,4',
    standardState: 'Solid', density: 11.34, meltingPoint: 600.61, boilingPoint: 2022,
    electronegativityPauling: 1.87, ionizationEnergy: 715.6
  },
  {
    atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', atomicMass: '208.98', category: 'post-transition-metal',
    period: 6, group: 15, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p3', electronsPerShell: '2,8,18,32,18,5',
    standardState: 'Solid', density: 9.78, meltingPoint: 544.7, boilingPoint: 1837,
    electronegativityPauling: 2.02, ionizationEnergy: 703
  },
  {
    atomicNumber: 84, symbol: 'Po', name: 'Polonium', atomicMass: '(209)', category: 'post-transition-metal', // Sometimes classed as metalloid
    period: 6, group: 16, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p4', electronsPerShell: '2,8,18,32,18,6',
    standardState: 'Solid', density: 9.196, // Alpha form
    meltingPoint: 527,
    boilingPoint: 1235,
    electronegativityPauling: 2.0, ionizationEnergy: 812.1
  },
  {
    atomicNumber: 85, symbol: 'At', name: 'Astatine', atomicMass: '(210)', category: 'halogen', // Sometimes classed as metalloid
    period: 6, group: 17, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p5', electronsPerShell: '2,8,18,32,18,7',
    standardState: 'Solid', density: 6.35, // Estimated
    meltingPoint: 575, // Estimated
    boilingPoint: 610, // Estimated
    electronegativityPauling: 2.2, ionizationEnergy: 899.0 // Estimated value, varies slightly
  },
  {
    atomicNumber: 86, symbol: 'Rn', name: 'Radon', atomicMass: '(222)', category: 'noble-gas',
    period: 6, group: 18, block: 'p',
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p6', electronsPerShell: '2,8,18,32,18,8',
    standardState: 'Gas', density: 9.73,
    meltingPoint: 202,
    boilingPoint: 211.5,
    electronegativityPauling: 2.2, // Estimated, similar to Astatine
    ionizationEnergy: 1037
  },
  // --- Period 7 ---
  {
    atomicNumber: 87, symbol: 'Fr', name: 'Francium', atomicMass: '(223)', category: 'alkali-metal',
    period: 7, group: 1, block: 's',
    electronConfiguration: '[Rn] 7s1', electronsPerShell: '2,8,18,32,18,8,1',
    standardState: 'Solid', density: 1.87, // Estimated
    meltingPoint: 300, // Estimated (around 27°C)
    boilingPoint: 950, // Estimated
    electronegativityPauling: 0.7, // Lowest electronegativity
    ionizationEnergy: 380 // Estimated
  },
  {
    atomicNumber: 88, symbol: 'Ra', name: 'Radium', atomicMass: '(226)', category: 'alkaline-earth-metal',
    period: 7, group: 2, block: 's',
    electronConfiguration: '[Rn] 7s2', electronsPerShell: '2,8,18,32,18,8,2',
    standardState: 'Solid', density: 5.5,
    meltingPoint: 973,
    boilingPoint: 2010,
    electronegativityPauling: 0.9, ionizationEnergy: 509.3
  },
  // Actinides start here
  {
    atomicNumber: 89, symbol: 'Ac', name: 'Actinium', atomicMass: '(227)', category: 'actinide', // Often grouped with Group 3
    period: 7, group: 3, block: 'f', // Often placed in d-block group 3 conceptually
    electronConfiguration: '[Rn] 6d1 7s2', electronsPerShell: '2,8,18,32,18,9,2',
    standardState: 'Solid', density: 10.07,
    meltingPoint: 1323, // Estimated
    boilingPoint: 3473, // Estimated
    electronegativityPauling: 1.1, ionizationEnergy: 499
  },
  {
    atomicNumber: 90, symbol: 'Th', name: 'Thorium', atomicMass: '232.04', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 6d2 7s2', electronsPerShell: '2,8,18,32,18,10,2', // Exception (no 5f electrons)
    standardState: 'Solid', density: 11.724,
    meltingPoint: 2023,
    boilingPoint: 5061,
    electronegativityPauling: 1.3, ionizationEnergy: 587
  },
  {
    atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', atomicMass: '231.04', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f2 6d1 7s2', electronsPerShell: '2,8,18,32,20,9,2',
    standardState: 'Solid', density: 15.37,
    meltingPoint: 1841,
    boilingPoint: 4300, // Estimated
    electronegativityPauling: 1.5, ionizationEnergy: 568
  },
  {
    atomicNumber: 92, symbol: 'U', name: 'Uranium', atomicMass: '238.03', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f3 6d1 7s2', electronsPerShell: '2,8,18,32,21,9,2',
    standardState: 'Solid', density: 19.1,
    meltingPoint: 1405.3,
    boilingPoint: 4404,
    electronegativityPauling: 1.38, ionizationEnergy: 597.6
  },
  {
    atomicNumber: 93, symbol: 'Np', name: 'Neptunium', atomicMass: '(237)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f4 6d1 7s2', electronsPerShell: '2,8,18,32,22,9,2',
    standardState: 'Solid', density: 20.45,
    meltingPoint: 917,
    boilingPoint: 4273,
    electronegativityPauling: 1.36, ionizationEnergy: 604.5
  },
  {
    atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', atomicMass: '(244)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f6 7s2', electronsPerShell: '2,8,18,32,24,8,2',
    standardState: 'Solid', density: 19.816, // Alpha phase
    meltingPoint: 912.5,
    boilingPoint: 3505,
    electronegativityPauling: 1.28, ionizationEnergy: 584.7
  },
  {
    atomicNumber: 95, symbol: 'Am', name: 'Americium', atomicMass: '(243)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f7 7s2', electronsPerShell: '2,8,18,32,25,8,2',
    standardState: 'Solid', density: 13.67, // Alpha phase
    meltingPoint: 1449,
    boilingPoint: 2880, // Estimated
    electronegativityPauling: 1.13, ionizationEnergy: 578
  },
  {
    atomicNumber: 96, symbol: 'Cm', name: 'Curium', atomicMass: '(247)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f7 6d1 7s2', electronsPerShell: '2,8,18,32,25,9,2', // Exception
    standardState: 'Solid', density: 13.51,
    meltingPoint: 1613,
    boilingPoint: 3383, // Estimated
    electronegativityPauling: 1.28, ionizationEnergy: 581
  },
  {
    atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', atomicMass: '(247)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f9 7s2', electronsPerShell: '2,8,18,32,27,8,2',
    standardState: 'Solid', density: 14.78, // Alpha phase
    meltingPoint: 1259,
    boilingPoint: 2900, // Estimated
    electronegativityPauling: 1.3, ionizationEnergy: 601
  },
  {
    atomicNumber: 98, symbol: 'Cf', name: 'Californium', atomicMass: '(251)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f10 7s2', electronsPerShell: '2,8,18,32,28,8,2',
    standardState: 'Solid', density: 15.1, // Estimated
    meltingPoint: 1173,
    boilingPoint: 1743, // Estimated
    electronegativityPauling: 1.3, ionizationEnergy: 608
  },
  {
    atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', atomicMass: '(252)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f11 7s2', electronsPerShell: '2,8,18,32,29,8,2',
    standardState: 'Solid', density: 8.84, // Estimated
    meltingPoint: 1133,
    boilingPoint: 1269, // Estimated
    electronegativityPauling: 1.3, ionizationEnergy: 619
  },
  {
    atomicNumber: 100, symbol: 'Fm', name: 'Fermium', atomicMass: '(257)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f12 7s2', electronsPerShell: '2,8,18,32,30,8,2',
    standardState: 'Solid', density: null, // Not determined due to scarcity
    meltingPoint: 1800, // Estimated
    boilingPoint: null, // Unknown
    electronegativityPauling: 1.3, ionizationEnergy: 627
  },
  {
    atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', atomicMass: '(258)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f13 7s2', electronsPerShell: '2,8,18,32,31,8,2', // Predicted
    standardState: 'Solid', density: null, // Not determined
    meltingPoint: 1100, // Estimated
    boilingPoint: null, // Unknown
    electronegativityPauling: 1.3, ionizationEnergy: 635 // Estimated
  },
  {
    atomicNumber: 102, symbol: 'No', name: 'Nobelium', atomicMass: '(259)', category: 'actinide',
    period: 7, group: null, block: 'f',
    electronConfiguration: '[Rn] 5f14 7s2', electronsPerShell: '2,8,18,32,32,8,2', // Predicted
    standardState: 'Solid', density: null, // Not determined
    meltingPoint: 1100, // Estimated
    boilingPoint: null, // Unknown
    electronegativityPauling: 1.3, ionizationEnergy: 642 // Estimated
  },
  {
    atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', atomicMass: '(262)', category: 'actinide', // Sometimes grouped with Group 3
    period: 7, group: 3, block: 'd', // Technically d-block, ends actinide series
    electronConfiguration: '[Rn] 5f14 7s2 7p1', electronsPerShell: '2,8,18,32,32,8,3', // Controversial; 7p1 vs 6d1 - 7p1 widely accepted now
    standardState: 'Solid', density: null, // Not determined
    meltingPoint: 1900, // Estimated
    boilingPoint: null, // Unknown
    electronegativityPauling: 1.3, // Estimated
    ionizationEnergy: 470 // Estimated
  },
  // Back to d-block (transactinides / superheavy elements)
  {
    atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', atomicMass: '(267)', category: 'transition-metal',
    period: 7, group: 4, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d2 7s2', electronsPerShell: '2,8,18,32,32,10,2', // Predicted
    standardState: 'Solid', density: 23.2, // Predicted
    meltingPoint: 2400, // Predicted
    boilingPoint: 5800, // Predicted
    electronegativityPauling: 1.3, // Predicted
    ionizationEnergy: 580 // Predicted
  },
  {
    atomicNumber: 105, symbol: 'Db', name: 'Dubnium', atomicMass: '(268)', category: 'transition-metal',
    period: 7, group: 5, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d3 7s2', electronsPerShell: '2,8,18,32,32,11,2', // Predicted
    standardState: 'Solid', density: 29.3, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null, // Not well established
    ionizationEnergy: 665 // Predicted
  },
  {
    atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', atomicMass: '(271)', category: 'transition-metal',
    period: 7, group: 6, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d4 7s2', electronsPerShell: '2,8,18,32,32,12,2', // Predicted
    standardState: 'Solid', density: 35.0, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 757 // Predicted
  },
  {
    atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', atomicMass: '(272)', category: 'transition-metal',
    period: 7, group: 7, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d5 7s2', electronsPerShell: '2,8,18,32,32,13,2', // Predicted
    standardState: 'Solid', density: 37.1, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 743 // Predicted
  },
  {
    atomicNumber: 108, symbol: 'Hs', name: 'Hassium', atomicMass: '(270)', category: 'transition-metal',
    period: 7, group: 8, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d6 7s2', electronsPerShell: '2,8,18,32,32,14,2', // Predicted
    standardState: 'Solid', density: 40.7, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 733 // Predicted
  },
  {
    atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', atomicMass: '(276)', category: 'unknown-properties', // Expected transition metal
    period: 7, group: 9, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d7 7s2', electronsPerShell: '2,8,18,32,32,15,2', // Predicted
    standardState: 'Solid', density: 37.4, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 800 // Predicted
  },
  {
    atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', atomicMass: '(281)', category: 'unknown-properties', // Expected transition metal
    period: 7, group: 10, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d8 7s2', electronsPerShell: '2,8,18,32,32,16,2', // Predicted (could be 6d9 7s1)
    standardState: 'Solid', density: 34.8, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 956 // Predicted
  },
  {
    atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', atomicMass: '(280)', category: 'unknown-properties', // Expected transition metal
    period: 7, group: 11, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d9 7s2', electronsPerShell: '2,8,18,32,32,17,2', // Predicted (could be 6d10 7s1)
    standardState: 'Solid', density: 28.7, // Predicted
    meltingPoint: null, // Unknown
    boilingPoint: null, // Unknown
    electronegativityPauling: null,
    ionizationEnergy: 1023 // Predicted
  },
  {
    atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', atomicMass: '(285)', category: 'transition-metal', // Chemically expected to resemble Hg more than a noble gas
    period: 7, group: 12, block: 'd',
    electronConfiguration: '[Rn] 5f14 6d10 7s2', electronsPerShell: '2,8,18,32,32,18,2', // Predicted
    standardState: 'Gas', // Predicted based on extrapolation (could be liquid)
    density: 14.0, // Predicted for liquid state at melting point
    meltingPoint: 283, // Predicted +/- 11 K
    boilingPoint: 340, // Predicted +/- 10 K
    electronegativityPauling: null,
    ionizationEnergy: 1155 // Predicted
  },
  {
    atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', atomicMass: '(286)', category: 'unknown-properties', // Expected post-transition metal
    period: 7, group: 13, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1', electronsPerShell: '2,8,18,32,32,18,3', // Predicted
    standardState: 'Solid', density: 16, // Predicted
    meltingPoint: 700, // Predicted
    boilingPoint: 1430, // Predicted
    electronegativityPauling: null,
    ionizationEnergy: 705 // Predicted
  },
  {
    atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', atomicMass: '(289)', category: 'post-transition-metal', // Properties may be closer to noble gases due to relativistic effects
    period: 7, group: 14, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p2', electronsPerShell: '2,8,18,32,32,18,4', // Predicted
    standardState: 'Solid', // Predicted (possibly gas)
    density: 14, // Predicted
    meltingPoint: 340, // Predicted
    boilingPoint: 420, // Predicted (low value, suggests volatility)
    electronegativityPauling: null,
    ionizationEnergy: 824 // Predicted
  },
  {
    atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', atomicMass: '(290)', category: 'unknown-properties', // Expected post-transition metal
    period: 7, group: 15, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p3', electronsPerShell: '2,8,18,32,32,18,5', // Predicted
    standardState: 'Solid', density: 13.5, // Predicted
    meltingPoint: 670, // Predicted
    boilingPoint: 1400, // Predicted
    electronegativityPauling: null,
    ionizationEnergy: 540 // Predicted
  },
  {
    atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', atomicMass: '(293)', category: 'unknown-properties', // Expected post-transition metal
    period: 7, group: 16, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p4', electronsPerShell: '2,8,18,32,32,18,6', // Predicted
    standardState: 'Solid', density: 12.9, // Predicted
    meltingPoint: 709, // Predicted (range 637–781 K)
    boilingPoint: 1085, // Predicted (range 1035–1135 K)
    electronegativityPauling: null,
    ionizationEnergy: 724 // Predicted
  },
  {
    atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', atomicMass: '(294)', category: 'unknown-properties', // Expected halogen or metalloid
    period: 7, group: 17, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p5', electronsPerShell: '2,8,18,32,32,18,7', // Predicted
    standardState: 'Solid', density: 7.17, // Predicted
    meltingPoint: 723, // Predicted (range 623–823 K)
    boilingPoint: 883, // Predicted
    electronegativityPauling: null,
    ionizationEnergy: 743 // Predicted
  },
  {
    atomicNumber: 118, symbol: 'Og', name: 'Oganesson', atomicMass: '(294)', category: 'unknown-properties', // Likely noble gas, but perhaps reactive solid due to relativistic effects
    period: 7, group: 18, block: 'p',
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p6', electronsPerShell: '2,8,18,32,32,18,8', // Predicted
    standardState: 'Solid', // Predicted (possibly gas)
    density: 4.95, // Predicted gas density at STP, solid density around 7 g/cm³ predicted
    meltingPoint: 325, // Predicted (could be around 298 K)
    boilingPoint: 350, // Predicted (range: 320-380 K BP)
    electronegativityPauling: null,
    ionizationEnergy: 839.4 // Predicted
  }
];

// Optional: Make it accessible if not using modules (remove if using export)
// window.elementData = elementData;

// If using ES6 Modules:
// export { elementData };