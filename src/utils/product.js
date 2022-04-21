const data = [
    {
        id: 1,
        name: "Micro Intel I5-11400 4.4Ghz 12Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811400_800.jpg",
        price: 34080.00,
        priceMP: 39192.00,
        stock: 25,
        description: "De la familia Intel I5, con 5 nucleos, frecuencia de 2.6 GHz, frecuencia turbo de 4.4GHz y grafica integrada de UHD Graphics 730",
        general:{
            family: "Intel I5",
            cores: 6,
            threads: 12,
            turboFrequency: "4,4 GHz",
            frequency: "2,6 GHz",
            integratedGraph: "UHD Graphics 730"
        },
        coolersHeatsinks:{
            coolerCPU: "Si",
            tdp: "65W",
            overclockeable: "No"
        },
        memory: {
            l1: "64 K",
            l2: "256 K",
            l3: "12 MB"
        },
        categoryId: 1,
        category: {
            name: "Microprocesadores",
            id: 1
        }
    },
    {
        id: 2,
        name: "Micro Intel I9-11900K 5.3Ghz 16Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811900K_800.jpg",
        price: 95617.01,
        priceMP: 109959.56,
        stock: 8,
        description: "De la familia Intel I9, con 8 nucleos, frecuencia de 3.5 GHz, frecuencia turbo de 5.3 GHz y grafica integrada de UHD Graphics 750",
        general: {
            family: "Intel I9",
            cores: 8,
            threads: 16,
            turboFrequency: "5,3 GHz",
            frequency: " 3,5 GHz",
            integratedGraph: "UHD Graphics 750"
        },
        coolersHeatsinks:{
            coolerCPU: "No",
            tdp: "125W",
            overclockeable: "Si"
        },
        memory: {
            l1: "64 K",
            l2: "256 K",
            l3: "16 MB"
        },
        categoryId: 1,
        category: {
            name: "Microprocesadores",
            id: 1
        }
    },
    {
        id:3,
        name: "Micro Intel I7-11700F 4.9Ghz 16Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811700F_800.jpg",
        price: 56327.04,
        priceMP: 64776.10,
        stock: 15,
        description: "De la familia Intel I7, con 8 nucleos, frecuencia de 2.5 GHz, frecuencia turbo de 4.9 GHz y sin grafica integrada",
        general : {
            family: "Intel I7",
            cores: 8,
            threads: 16,
            turboFrequency: "2.5 GHz",
            frequency: "4.9 GHz",
            integratedGraph: "N/A",
        },
        coolersHeatsinks:{
            coolerCPU: "Si",
            tdp: "65W",
            overclockeable: "Si"
        },
        memory: {
            l1: "64 K",
            l2: "256 K",
            l3: "16 MB"
        },
        categoryId: 1,
        category: {
            name: "Microprocesadores",
            id: 1
        }
    },
    {
        id: 4,
        name: "Micro Intel I7-10700F 4.8Ghz 16Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/5032037188760_800.jpg",
        price: 45251.25,
        priceMP: 52038.94,
        stock: 10,
        description: "De la familia Intel I7, con 8 nucleos, frecuencia de 2.9 GHz, frecuencia turbo de 4.8 GHz y sin grafica integrada",
        general : {
            family: "Intel Core I7",
            cores: 8,
            threads: 16,
            turboFrequency: "4.8 GHz",
            frequency: "2.9 GHz",
            integratedGraph: "N/A",
        },
        coolersHeatsinks:{
            coolerCPU: "Si",
            tdp: "65W",
            overclockeable: "No"
        },
        memory: {
            l1: "512 kb",
            l2: "2 MB",
            l3: "16 MB"
        },
        categoryId: 1,
        category: {
            name: "Microprocesadores",
            id: 1
        }
    },
    {
        id:5,
        name: "Motherboard Gigabyte Z490 Aorus MASTER WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/Z490-AORUS-MASTER-WIFI_800.jpg",
        price: 55824.26,
        priceMP: 64197.90,
        stock: 25,
        description: "De plataforma Intel, con 1 salida HDMI, placa de Red 'Intel® 2.5GbE LAN Chip (2.5 Gbit/1 Gbit/100 Mbit)', WiFi 'Intel® Wi-Fi 6 AX201', USB '4 X USB 2.0/1.1 Ports, 3 X USB 3.2 Gen 2 Type-A Ports (Red), 2 X USB 3.2 Gen 1 Ports, 1 X USB Type-C™ Port, With USB 3.2 Gen 2', con cantidad de memoria RAM DDR4 x4(Max. 128GB) y sonido 'Realtek® ALC1220-VB Codec'",
        general : {
            socket: "LGA1200",
            chipset: "Z490",
            platform: "Intel"
        },
        connectivity:{
            HDMIOutputs: 1,
            DSUBOutputs: "No",
            DVIDOutputs: "No",
            SATAPorts: 6,
            SlotM2: 3,
            SlotPCIE16X: "No",
            SlotPCIE1X: "No",
            networkCard: "Intel® 2.5GbE LAN Chip (2.5 Gbit/1 Gbit/100 Mbit)",
            WIFI: "Intel® Wi-Fi 6 AX201",
            USB: "4 X USB 2.0/1.1 Ports, 3 X USB 3.2 Gen 2 Type-A Ports (Red), 2 X USB 3.2 Gen 1 Ports, 1 X USB Type-C™ Port, With USB 3.2 Gen 2",
            Thunderbolt4: "No"
        },
        memory: {
            DDR4DIMMSlotQuantity: "4 (Max. 128 GB)"
        },
        sound: {
            sound: "Realtek® ALC1220-VB Codec"
        },
        energy: {
            PinConnector24: 1,
            PinCPUConector8: 2
        },
        categoryId: 2,
        category: {
            name: "Motherboard",
            id: 2
        }
    },
    {
        id:6,
        name: "Motherboard Asus ROG STRIX Z590-E GAMING WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90MB1640-M0EAY0_800.jpg",
        price: 42819.32,
        priceMP: 49242.22,
        stock: 30,
        description: "De plataforma Intel, con 1 salida HDMI, 1 salida DisplayPort, placa de Red 'Intel® I225-V 2.5Gb Ethernet ASUS LANGuard (X2)', USB '8 (3.2) / 2 (2.0)', con cantidad de memoria RAM DDR4 x4(Max. 128GB) y sonido 'Realtek ALC4080'",
        general: {
            socket: 1200,
            chipset: "Z590",
            platform: "Intel"
        },
        connectivity: {
            HDMIOutputs: 1,
            DSUBOutputs: "No",
            DisplayPortOutputs: 1,
            DVIDOutputs: "No",
            SATAPorts: 6,
            SlotM2: 4,
            SlotPCIE16X: 3,
            SlotPCIE1X: "No",
            networkCard: "Intel® I225-V 2.5Gb Ethernet ASUS LANGuard (X2)",
            USB: "8 (3.2) / 2 (2.0)"
        },
        memory: {
            DDR4DIMMSlotQuantity: "4 (Max. 128GB)"
        },
        sound: {
            sound: "Realtek ALC4080"
        },
        energy: {
            PinConnector24: 1,
            PinCPUConector8: 1
        },
        categoryId: 2,
        category: {
            name: "Motherboard",
            id: 2
        }
    },
    {
        id: 7,
        name: "Motherboard Asus Z590 TUF Plus Gaming WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/TUF-Gaming-Z590-PLUS-WIFI_800.jpg",
        price: 36918.32,
        priceMP: 42456.07,
        stock: 20,
        description: "De plataforma Intel, con 1 salida HDMI, 1 salida DisplayPort, placa de Red 'Intel® I225-V 2.5G Ethernet', WiFi 'Intel® Wi-Fi 6', USB '2 X USB 2.0, 2 X USB 3.2 Gen1, 2 X USB 3.2 Gen 2, 1 X USB 3.2 Gen 2x2 Type-C®', con cantidad de memoria RAM DDR4 x4(Max. 128GB) y sonido 'Realtek ALC S1200A 7.1'",
        general: {
            socket: "LGA1200",
            chipset: "Z590",
            platform: "Intel"
        },
        connectivity: {
            HDMIOutputs: 1,
            DSUBOutputs: "No",
            DisplayPortOutputs: 1,
            DVIDOutputs: "No",
            SATAPorts: 6,
            SlotM2: "3 (Soporta NVMe Y SATA)",
            SlotPCIE16X: 2,
            SlotPCIE1X: 2,
            networkCard: "Intel® I225-V 2.5G Ethernet",
            WIFI: "Intel® Wi-Fi 6",
            USB: "2 X USB 2.0, 2 X USB 3.2 Gen1, 2 X USB 3.2 Gen 2, 1 X USB 3.2 Gen 2x2 Type-C®",
            Thunderbolt4: "No"
        },
        memory: {
            DDR4DIMMSlotQuantity: "4 (Max. 128 GB)"
        },
        sound: {
            sound: "Realtek ALC S1200A 7.1"
        },
        energy: {
            PinConnector24: 1,
            PinCPUConector8: 1,
            PinCPUConector4: 1
        },
        categoryId: 2,
        category: {
            name: "Motherboard",
            id: 2
        }
    },
    {
        id: 8,
        name: "Memoria Ram Kingston Fury Renegade RGB 32GB 3600 Mhz DDR4",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF436C1RB-32_800.jpg",
        price: 30269.28,
        priceMP: 34809.67,
        stock: 10,
        description: "De Familia de Kingston, tipo de memoria DDR4, tamaño de la memoria 32 GB, con disipador de calor, voltaje de 1.35 V y velocidad de 3600 MHz",
        general: {
            family: "Kingston",
            memoryType: "DDR4",
            memorySize: "32 GB",
            memoryFormat: "UDIMM"
        },
        functioning: {
            CASLatency: "CL16" ,
            volt: "1.35 V",
            velocity: "3600 MHz"
        },
        additional: {
            memoryPin: 288,
            heatsink: "Si",
            performanceProfile: "XMP 2.0"
        },
        categoryId: 3,
        category: {
            name: "Memoria RAM",
            id: 3
        }
    },
    {
        id: 9,
        name: "Memoria Ram Kingston Fury Beast 4GB 2666 Mhz DDR4",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF426C16BB-4_800.jpg",
        price: 4800.00,
        priceMP: 5520.00,
        stock: 8,
        description: "De Familia de Kingston, tipo de memoria DDR4, tamaño de la memoria 4 GB, con disipador de calor, voltaje de 1.2 V y velocidad de 2666 MHz",
        general: {
            family: "Kingston",
            memoryType: "DDR4",
            memorySize: "4 GB",
            memoryFormat: "Udimm"
        },
        functioning: {
            CASLatency: "CL16",
            volt: "1.2 V",
            velocity: "2666 MHz"
        },
        additional: {
            memoryPin: 288,
            heatsink: "Si",
            performanceProfile: "XMP 2.0"
        },
        categoryId: 3,
        category: {
            name: "Memoria RAM",
            id: 3
        }
    },
    {
        id: 10,
        name: "Memoria Ram OEM 4GB 2666 Mhz DDR4 BULK",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MEM4GBDDR42666_800.jpg",
        price: 3048.74,
        priceMP: 3506.05,
        stock: 3,
        description: "Tipo de memoria DDR4, tamaño de la memoria 4 GB, sin disipador de calor, voltaje de 1.2 V y velocidad de 2666 MHz",
        general: {
            family: "Sin Especificar",
            memoryType: "DDR4",
            memorySize: "4 GB",
            memoryFormat: "Udimm"
        },
        functioning: {
            CASLatency: "Sin Especificar",
            volt: "1.2 V",
            velocity: "2666 MHz"
        },
        additional: {
            memoryPin: 288,
            heatsink: "No",
            performanceProfile: "No"
        },
        categoryId: 3,
        category: {
            name: "Memoria RAM",
            id: 3
        }
    },
    {
        id: 11,
        name: "Placa de Video Asus RTX 3080 Ti TUF OC GAMING 12GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0GU1-MTAA00_800.jpg",
        price: 372340.80,
        priceMP: 428191.92,
        stock: 25,
        description: "Contiene 2 salidas HDMI, 3 salidas DisplayPort, consume 350W, Watts recomendados de la fuente 750 W, con una capacidad de memoria de 12GB, tipo GDDR6X con una velocidad de 19 Gbps",
        general: {
            connectionType: "PCI Express 4.0",
            chipsetGPU: "RTX 3080 Ti",
            LHRProduct: "Low Hash Rate"
        },
        connectivity: {
            HDMIOutputs: 2,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "350 W",
            recommendedWatts: "750 W",
            powerConnection: "2x 8-pin"
        },
        coolers: {
            coolersAmount: 3
        },
        details: {
            coreSpeed: "1365 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "12 GB",
            memoryVelocity: "19 Gbps",
            memoryInterface: "384 Bit",
            processTypes: "CUDA",
            CUDA: 10240
        },
        categoryId: 4,
        category: {
            name: "Placa de Video",
            id: 4
        }
    },
    {
        id: 12,
        name: "Placa de Video Asus RTX 3070 Ti TUF GAMING 8GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0GY1-M0AA00_800.jpg",
        price: 219580.00,
        priceMP: 252517.00,
        stock: 10,
        description: "Contiene 1 salida HDMI, 3 salidas DisplayPort, consume 290W, Watts recomendados de la fuente 600 W, con una capacidad de memoria de 8GB, tipo DDDR6X con una velocidad de 19 Gbps",
        general: {
            connectionType: "PCI® Express 4.0",
            chipsetGPU: "RTX 3080 Ti"
        },
        connectivity: {
            HDMIOutputs: 1,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "290 W",
            recommendedWatts: "600 W",
            powerConnection: "2x 8-pin"
        },
        coolers: {
            coolersAmount: 3
        },
        details: {
            coreSpeed: "1575 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "8 GB",
            memoryVelocity: "19 Gbps",
            memoryInterface: "256 Bit",
            processTypes: "CUDA",
            CUDA: 6144
        },
        categoryId: 4,
        category: {
            name: "Placa de Video",
            id: 4
        }
    },
    {
        id: 13,
        name: "Placa de Video MSI GeForce RTX 3080 VENTUS PLUS 3X OC 10GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/912-V389-263_800.jpg",
        price: 246860.00,
        priceMP: 283889.00,
        stock: 20,
        description: "Contiene 1 salida HDMI, 3 salidas DisplayPort, consume 320W, Watts recomendados de la fuente 700 W, con una capacidad de memoria de 10GB, tipo DDDR6X con una velocidad de 19 Gbps", 
        general: {
            connectionType: "PCI® Express 4.0",
            chipsetGPU: "NVIDIA GeForce RTX 3080"
        },
        connectivity: {
            HDMIOutputs: 1,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "320 W",
            recommendedWatts: "700 W",
            powerConnection: "2x 8-pin"
        },
        coolers: {
            coolersAmount: 3
        },
        details: {
            coreSpeed: "1440 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "10 GB",
            memoryVelocity: "19 Gbps",
            memoryInterface: "320 Bit",
            processTypes: "CUDA",
            CUDA: 8704
        },
        categoryId: 4,
        category: {
            name: "Placa de Video",
            id: 4
        }
    },
    {
        id: 14,
        name: "Placa de Video ASUS ROG Strix RTX 3080 OC White Edition 10GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/ROG-STRIX-RTX3080-O10G-WHITE_800.jpg",
        price: 257332.79,
        priceMP: 295932.71,
        stock: 18,
        description: "Contiene 2 salidas HDMI, 3 salidas DisplayPort, consume 320W, Watts recomendados de la fuente 750 W, con una capacidad de memoria de 10GB, tipo DDDR6X con una velocidad de 19 Gbps", 
        general: {
            connectionType: "PCI® Express 4.0",
            chipsetGPU: "RTX 3080"
        },
        connectivity: {
            HDMIOutputs: 2,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "320 W",
            recommendedWatts: "750 W",
            powerConnection: "3x 8-pin"
        },
        coolers: {
            coolersAmount: 3
        },
        details: {
            coreSpeed: "1440 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "10 GB",
            memoryVelocity: "19 Gbps",
            memoryInterface: "320 Bit",
            processTypes: "CUDA",
            CUDA: 8704
        },
        categoryId: 4,
        category: {
            name: "Placa de Video",
            id: 4
        }
    },
    {
        id: 15,
        name: "Placa de Video MSI RTX 3060 Ti GAMING X 8GB GDDR6 LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/RTX-3060-TI-GAMING--X-LHR_800.jpg",
        price: 161550.00,
        priceMP: 185782.50,
        stock: 12,
        description: "Contiene 1 salida HDMI, 3 salidas DisplayPort, consume 220W, Watts recomendados de la fuente 600 W, con una capacidad de memoria de 8GB, tipo DDDR6X con una velocidad de 14 Gbps", 
        general: {
            connectionType: "PCI® 4.0",
            chipsetGPU: "NVIDIA GeForce RTX 3080",
            LHRProduct: "Low Hash Rate"
        },
        connectivity: {
            HDMIOutputs: 1,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "220 W",
            recommendedWatts: "600 W",
            powerConnection: "8-Pin X 1 + 6-Pin X 1"
        },
        coolers: {
            coolersAmount: 2
        },
        details: {
            coreSpeed: "1410 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "8 GB",
            memoryVelocity: "14 Gbps",
            memoryInterface: "256 Bit",
            processTypes: "CUDA",
            CUDA: 4864
        },
        categoryId: 4,
        category: {
            name: "Placa de Video",
            id: 4
        }
    },
    {
        id: 16,
        name: "Disco Solido SSD 2TB Kingston NV1 M.2 NVMe PCIe 3.0",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/SNVS-2000G_800.jpg",
        price: 27227.00,
        priceMP: 185782.50,
        stock: 16,
        description: "Disco Solido de 2 TB, con conector PCIe 3.0, su velocidad de lectura secuencial es hasta 2100 MB/S y de escritura es hasta 1700 MH/S",
        general: {
            ability: "2 TB",
        },
        connectivity: {
            HDMIOutputs: 1,
            DVIOutputs: "No",
            DisplayPortOutputs: 3
        },
        energy: {
            Consumption: "220 W",
            recommendedWatts: "600 W",
            powerConnection: "8-Pin X 1 + 6-Pin X 1"
        },
        coolers: {
            coolersAmount: 2
        },
        details: {
            coreSpeed: "1410 MHz",
            memoryType: "DDDR6X",
            memoryAbility: "8 GB",
            memoryVelocity: "14 Gbps",
            memoryInterface: "256 Bit",
            processTypes: "CUDA",
            CUDA: 4864
        },
        categoryId: 5,
        category: {
            name: "Almacenamiento",
            id: 5
        }
    },
    {
        id: 17,
        name: "Disco Solido SSD 960GB Kingston A400 SATA III",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/SA400S37-960G_800.jpg",
        price: 15825.00,
        priceMP: 18198.75,
        stock: 12,
        description: "Disco Solido de 960 GB, con conector 'SATA Rev. 3.0 (6 Gb/S), Retrocompatible Con SATA Rev. 2.0 (3 Gb/S)', su velocidad de lectura secuencial es hasta 545 MB/S y de escritura es hasta 545 MH/S",
        general: {
            ability: "960 GB",
            connector: "SATA Rev. 3.0 (6 Gb/S), Retrocompatible Con SATA Rev. 2.0 (3 Gb/S)",
            usefulLife: "Hasta 1 Millon De Horas"
        },
        energy: {
            consumptionMax: "0.642W (Lectura), 1.535W (Escritura)",
            consumptionRepose: "0.195 W",
            consumptionAverage: "0.279 W"
        },
        categoryId: 5,
        category: {
            name: "Almacenamiento",
            id: 5
        }
    },
    {
        id: 18,
        name: "Fuente 600W NAXIDO",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/NATX-600SW_800.jpg",
        price: 2560.00,
        priceMP: 2944.00,
        stock: 10,
        description: "Fuente de formato ATX 12V V2.31, con Watts Nominales de 600W y reales de 200W, contiene un ventilador de 120mm y una eficiencia menos de 80% tipicamente.",
        general: {
            format: "ATX 12V V2.31",
            PCF: "Sin Especificar",
            wattsNominales: "600W",
            wattsReales: "200W"
        },
        connectors: {
            ATX24Pines: "Si",
            EPS4Pines: 1,
            SATA: 2,
            molex: 2,
            PCIExpress62: "N/A"
        },
        features: {
            efficiency: "> 80% Tipicamente",
            protectors: "Sin Especificar",
            MTBF: "Sin Especificar",
            ventilator: "Si (120mm)",
            wireA200V: "Si"
        },
        categoryId: 6,
        category: {
            name: "Fuente",
            id: 6
        }
    },
    {
        id: 19,
        name: "Fuente 550W Thermaltake LitePower",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/LPT550NL2NK_800.jpg",
        price: 4000.00,
        priceMP: 4600.00,
        stock: 6,
        description: "Fuente de formato ATX, con Watts Nominales de 550W y reales de 550W, contiene un ventilador de 120mm y protecciones 'CE, TUV SUD, CB, EAC Y RCM'.",
        general: {
            format: "ATX",
            PCF: "Active PFC",
            wattsNominales: "550W",
            wattsReales: "550W"
        },
        connectors: {
            ATX24Pines: "Si",
            EPS4Pines: 1,
            SATA: 5,
            molex: 4,
            PCIExpress62: 2
        },
        features: {
            efficiency: "No especifica",
            protectors: "CE, TUV SUD, CB, EAC Y RCM",
            MTBF: "> 100K Hs",
            ventilator: "Si (120mm)",
            wireA200V: "Si"
        },
        categoryId: 6,
        category: {
            name: "Fuente",
            id: 6
        }
    },
    {
        id: 20,
        name: "Motherboard Asrock X370M HDV R4.0 AM4",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90-MXB9P0-A0UAYZ_800.jpg",
        price: 7814.38,
        priceMP: 8986.54,
        stock: 20,
        description: "De plataforma AMD, con 1 salida HDMI, 1 salida DVI-D y 1 salida VGA, una placa de Red 'LAN 10/100/1000 Mbps', USB '44 X USB 3.0, 2 X 2.0', con cantidad de memoria RAM DDR4 x2(Max. 32GB) y sonido 'Realtek ALC887/897 Audio Codec'",
        general: {
            socket: "AM4",
            chipset: "X370",
            platform: "AMD"
        },
        connectivity: {
            HDMIOutputs: 1,
            DSUBOutputs: 1,
            DisplayPortOutputs: "No",
            DVIDOutputs: 1,
            SATAPorts: 4,
            SlotM2: "1 (Soporta NVMe Y SATA)",
            SlotPCIE16X: 1,
            SlotPCIE1X: 1,
            networkCard: "LAN 10/100/1000 Mbps.",
            WIFI: "No",
            USB: "4 X USB 3.0, 2 X 2.0"
        },
        memory: {
            DDR4DIMMSlotQuantity: "2 (Max. 32 GB)"
        },
        sound: {
            sound: "Realtek ALC887/897 Audio Codec"
        },
        energy: {
            PinConnector24: 1,
            PinCPUConector4: 1
        },
        categoryId: 2,
        category: {
            name: "Motherboard",
            id: 2
        }
    }
];

export default data;