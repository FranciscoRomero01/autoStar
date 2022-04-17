const data = [
    {
        id: 1,
        name: "Micro Intel I5-11400 4.4Ghz 12Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811400_800.jpg",
        price: 34080.00,
        priceMP: 39192.00,
        stock: 25,
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
        }

    },
    {
        id: 2,
        name: "Micro Intel I9-11900K 5.3Ghz 16Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811900K_800.jpg",
        price: 95617.01,
        priceMP: 109959.56,
        stock: 8,
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
        }
    },
    {
        id:3,
        name: "Micro Intel I7-11700F 4.9Ghz 16Mb S.1200",
        img: "https://http2.mlstatic.com/D_NQ_NP_837315-MLA49524678844_032022-W.webp",
        price: 56327.04,
        priceMP: 64776.10,
        stock: 15,
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
        }
    },
    {
        id: 4,
        name: "Micro Intel I7-10700F 4.8Ghz 16Mb S.1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/5032037188760_800.jpg",
        price: 45251.25,
        priceMP: 52038.94,
        stock: 10,
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
        }
    },
    {
        id:5,
        name: "Motherboard Gigabyte Z490 Aorus MASTER WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/Z490-AORUS-MASTER-WIFI_800.jpg",
        price: 55824.26,
        priceMP: 64197.90,
        stock: 25,
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
        }
    },
    {
        id:6,
        name: "Motherboard Asus ROG STRIX Z590-E GAMING WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90MB1640-M0EAY0_800.jpg",
        price: 42819.32,
        priceMP: 49242.22,
        stock: 30,
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
        }
    },
    {
        id: 7,
        name: "Motherboard Asus Z590 TUF Plus Gaming WIFI 1200",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/TUF-Gaming-Z590-PLUS-WIFI_800.jpg",
        price: 36918.32,
        priceMP: 42456.07,
        stock: 20,
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
        }
    },
    {
        id: 8,
        name: "Memoria Ram Kingston Fury Renegade RGB 32GB 3600 Mhz DDR4",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF436C1RB-32_800.jpg",
        price: 30269.28,
        priceMP: 34809.67,
        stock: 10,
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
        }
    },
    {
        id: 9,
        name: "Memoria Ram Kingston Fury Beast 4GB 2666 Mhz DDR4",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF426C16BB-4_800.jpg",
        price: 4800.00,
        priceMP: 5520.00,
        stock: 8,
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
        }
    },
    {
        id: 10,
        name: "Memoria Ram OEM 4GB 2666 Mhz DDR4 BULK",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MEM4GBDDR42666_800.jpg",
        price: 3048.74,
        priceMP: 3506.05,
        stock: 3,
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
        }
    },
    {
        id: 11,
        name: "Placa de Video Asus RTX 3080 Ti TUF OC GAMING 12GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0GU1-MTAA00_800.jpg",
        price: 372340.80,
        priceMP: 428191.92,
        stock: 25,
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
        }
    },
    {
        id: 12,
        name: "Placa de Video Asus RTX 3070 Ti TUF GAMING 8GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0GY1-M0AA00_800.jpg",
        price: 219580.00,
        priceMP: 252517.00,
        stock: 10,
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
        }
    },
    {
        id: 13,
        name: "Placa de Video MSI GeForce RTX 3080 VENTUS PLUS 3X OC 10GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/912-V389-263_800.jpg",
        price: 246860.00,
        priceMP: 283889.00,
        stock: 20,
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
        }
    },
    {
        id: 14,
        name: "Placa de Video ASUS ROG Strix RTX 3080 OC White Edition 10GB GDDR6X LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/ROG-STRIX-RTX3080-O10G-WHITE_800.jpg",
        price: 257332.79,
        priceMP: 295932.71,
        stock: 18,
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
        }
    },
    {
        id: 15,
        name: "Placa de Video MSI RTX 3060 Ti GAMING X 8GB GDDR6 LHR",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/RTX-3060-TI-GAMING--X-LHR_800.jpg",
        price: 161550.00,
        priceMP: 185782.50,
        stock: 12,
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
        }
    },
    {
        id: 16,
        name: "Disco Solido SSD 2TB Kingston NV1 M.2 NVMe PCIe 3.0",
        img: "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/SNVS-2000G_800.jpg",
        price: 27227.00,
        priceMP: 185782.50,
        stock: 16,
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
        }
    }
];

export default data;