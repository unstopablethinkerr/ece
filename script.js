document.addEventListener('DOMContentLoaded', () => {
    const syllabusContent = document.getElementById('syllabus-content');

    const subjects = [
        {
            name: 'OGI352 GEOGRAPHICAL INFORMATION SYSTEM',
            units: [
                {
                    number: 1,
                    name: 'FUNDAMENTALS OF GIS',
                    topics: [
                        'Introduction to GIS', 'Basic spatial concepts', 'Coordinate Systems', 'GIS and Information Systems',
                        'Definitions', 'History of GIS', 'Components of a GIS', 'Hardware, Software, Data, People, Methods',
                        'Proprietary and open source Software', 'Types of data', 'Spatial, Attribute data- types of attributes',
                        'scales/ levels of measurements'
                    ]
                },
                {
                    number: 2,
                    name: 'SPATIAL DATA MODELS',
                    topics: [
                        'Database Structures', 'Relational, Object Oriented', 'Entities', 'ER diagram', 'data models',
                        'conceptual, logical and physical models', 'spatial data models', 'Raster Data Structures',
                        'Raster Data Compression', 'Vector Data Structures', 'Raster vs Vector Models', 'TIN and GRID data models'
                    ]
                },
                {
                    number: 3,
                    name: 'DATA INPUT AND TOPOLOGY',
                    topics: [
                        'Scanner', 'Raster Data Input', 'Raster Data File Formats', 'Georeferencing Vector Data Input',
                        'Digitizer', 'Datum Projection and reprojection Coordinate Transformation', 'Topology',
                        'Adjacency, connectivity and containment', 'Topological Consistency', 'Non topological file formats',
                        'Attribute Data linking', 'Linking External Databases', 'GPS Data Integration'
                    ]
                },
                {
                    number: 4,
                    name: 'DATA QUALITY AND STANDARDS',
                    topics: [
                        'Data quality', 'Basic aspects', 'completeness, logical consistency, positional accuracy, temporal accuracy, thematic accuracy and lineage',
                        'Metadata GIS Standards', 'Interoperability', 'OGC', 'Spatial Data Infrastructure'
                    ]
                },
                {
                    number: 5,
                    name: 'DATA MANAGEMENT AND OUTPUT',
                    topics: [
                        'Import/Export', 'Data Management functions', 'Raster to Vector and Vector to Raster Conversion',
                        'Data Output', 'Map Compilation', 'Chart/Graphs Multimedia', 'Enterprise Vs. Desktop GIS', 'distributed GIS'
                    ]
                }
            ]
        },
        {
            name: 'GE3791- Human Values And Ethics Syllabus',
            units: [
                {
                    number: 1,
                    name: 'Democratic Values',
                    topics: [
                        'Understanding Democratic values: Equality, Liberty, Fraternity, Freedom, Justice, Pluralism, Tolerance, Respect for All, Freedom of Expression, Citizen Participation in Governance',
                        'World Democracies: French Revolution, American Independence, Indian Freedom Movement'
                    ]
                },
                {
                    number: 2,
                    name: 'Secular Values',
                    topics: [
                        'Understanding Secular values', 'Interpretation of secularism in Indian context Disassociation of state from religion',
                        'Acceptance of all faiths', 'Encouraging nondiscriminatory practices'
                    ]
                },
                {
                    number: 3,
                    name: 'Scientific Values',
                    topics: [
                        'Scientific thinking and method: Inductive and Deductive thinking, Proposing and testing Hypothesis, Validating facts using evidence-based approach',
                        'Skepticism and Empiricism', 'Rationalism and Scientific Temper'
                    ]
                },
                {
                    number: 4,
                    name: 'Social Ethics',
                    topics: [
                        'Application of ethical reasoning to social problems', 'Gender bias and issues Gender violence',
                        'Social discrimination', 'Constitutional protection and policies Inclusive practices'
                    ]
                },
                {
                    number: 5,
                    name: 'Scientific Ethics',
                    topics: [
                        'Transparency and Fairness in scientific pursuits', 'Scientific inventions for the betterment of society',
                        'Unfair application of scientific inventions', 'Role and Responsibility of Scientist in the modern society'
                    ]
                }
            ]
        },
        {
            name: 'GE3751 PRINCIPLES OF MANAGEMENT',
            units: [
                {
                    number: 1,
                    name: 'INTRODUCTION TO MANAGEMENT AND ORGANIZATIONS',
                    topics: [
                        'Definition of Management', 'Science or Art', 'Manager Vs Entrepreneur', 'types of managersmanagerial roles and skills',
                        'Evolution of Management', 'Scientific, human relations, system and contingency approaches', 'Types of Business organization',
                        'Sole proprietorship, partnership, company', 'public and private sector enterprises', 'Organization culture and Environment',
                        'Current trends and issues in Management'
                    ]
                },
                {
                    number: 2,
                    name: 'PLANNING',
                    topics: [
                        'Nature and purpose of planning', 'Planning process', 'Types of planning', 'Objectives', 'Setting objectives',
                        'Policies', 'Planning premises', 'Strategic Management', 'Planning Tools and Techniques', 'Decision making steps and process'
                    ]
                },
                {
                    number: 3,
                    name: 'ORGANISING',
                    topics: [
                        'Nature and purpose', 'Formal and informal organization', 'Organization chart', 'Organization structure', 'Types',
                        'Line and staff authority', 'Departmentalization', 'delegation of authority Centralization and decentralization',
                        'Job Design', 'Human Resource Management', 'HR Planning, Recruitment, selection, Training and Development, Performance Management, Career planning and management'
                    ]
                },
                {
                    number: 4,
                    name: 'DIRECTING',
                    topics: [
                        'Foundations of individual and group behaviour', 'Motivation', 'Motivation theories', 'Motivational techniques',
                        'Job satisfaction', 'Job enrichment', 'Leadership', 'types and theories of leadership Communication',
                        'Process of communication', 'Barrier in communication', 'Effective communication', 'Communication and IT'
                    ]
                },
                {
                    number: 5,
                    name: 'CONTROLLING',
                    topics: [
                        'System and process of controlling', 'Budgetary and non - Budgetary control techniques',
                        'Use of computers and IT in Management control', 'Productivity problems and management', 'Control and performance',
                        'Direct and preventive control', 'Reporting'
                    ]
                }
            ]
        },
        {
            name: 'OEE351 RENEWABLE ENERGY SYSTEM',
            units: [
                {
                    number: 1,
                    name: 'INTRODUCTION',
                    topics: [
                        'Primary energy sources, renewable vs. non-renewable primary energy sources', 'renewable energy resources in India',
                        'Current usage of renewable energy sources in India', 'future potential of renewable energy in power production and development of renewable energy technologies'
                    ]
                },
                {
                    number: 2,
                    name: 'SOLAR ENERGY',
                    topics: [
                        'Solar Radiation and its measurements', 'Solar Thermal Energy Conversion from plate Solar Collectors',
                        'Concentrating Collectors and its Types', 'Efficiency and performance of collectors', 'Direct Solar Electricity Conversion from Photovoltaic',
                        'types of solar cells and its application of battery charger, domestic lighting, street lighting, and water pumping, power generation schemes',
                        'Recent Advances in PV Applications: Building Integrated PV, Grid Connected PV Systems'
                    ]
                },
                {
                    number: 3,
                    name: 'WIND ENERGY',
                    topics: [
                        'Wind energy principles', 'wind site and its resource assessment', 'wind assessment', 'Factors influencing wind',
                        'wind turbine components', 'wind energy conversion systems (WECS)', 'Classification of WECS devices',
                        'wind electric generating and control systems', 'characteristics and applications'
                    ]
                },
                {
                    number: 4,
                    name: 'BIO-ENERGY',
                    topics: [
                        'Energy from biomass', 'Principle of biomass conversion technologies/process and their classification',
                        'Bio gas generation', 'types of biogas plants', 'selection of site for biogas plant', 'classification of biogas plants',
                        'Advantage and disadvantages of biogas generation', 'thermal gasification of biomass', 'biomass gasifies',
                        'Application of biomass and biogas plants and their economics'
                    ]
                },
                {
                    number: 5,
                    name: 'OTHER TYPES OF ENERGY',
                    topics: [
                        'Energy conversion from Hydrogen and Fuel cells', 'Geo thermal energy Resources', 'types of wells',
                        'methods of harnessing the energy', 'potential in India', 'OTEC, Principles utilization, setting of OTEC plants, thermodynamic cycles',
                        'Tidal and wave energy: Potential and conversion techniques', 'mini- hydel power plants and their economics'
                    ]
                }
            ]
        },
        {
            name: 'EC3492 DIGITAL SIGNAL PROCESSING',
            units: [
                {
                    number: 1,
                    name: 'DISCRETE FOURIER TRANSFORM',
                    topics: [
                        'Sampling Theorem', 'concept of frequency in discrete-time signals', 'summary of analysis & synthesis equations for FT & DTFT',
                        'frequency domain sampling', 'Discrete Fourier transform (DFT)', 'deriving DFT from DTFT', 'properties of DFT',
                        'periodicity, symmetry, circular convolution', 'Linear filtering using DFT', 'Filtering long data sequences',
                        'overlap save and overlap add method', 'Fast computation of DFT', 'Radix-2 Decimation-in-time (DIT) Fast Fourier transform (FFT)',
                        'Decimation-in-frequency (DIF) Fast Fourier transform (FFT)', 'Linear filtering using FFT'
                    ]
                },
                {
                    number: 2,
                    name: 'INFINITE IMPULSE RESPONSE FILTERS',
                    topics: [
                        'Characteristics of practical frequency selective filters', 'characteristics of commonly used analog filters',
                        'Butterworth filters, Chebyshev filters', 'Design of IIR filters from analog filters (LPF, HPF, BPF, BRF)',
                        'Approximation of derivatives, Impulse invariance method, Bilinear transformation', 'Frequency transformation in the analog domain',
                        'Structure of IIR filter', 'direct form I, direct form II, Cascade, parallel realizations'
                    ]
                },
                {
                    number: 3,
                    name: 'FINITE IMPULSE RESPONSE FILTERS',
                    topics: [
                        'Design of FIR filters', 'symmetric and Anti-symmetric FIR filters', 'design of linear phase FIR filters using Fourier series method',
                        'FIR filter design using windows (Rectangular, Hamming and Hanning window)', 'Frequency sampling method',
                        'FIR filter structures', 'linear phase structure, direct form realizations'
                    ]
                },
                {
                    number: 4,
                    name: 'FINITE WORD LENGTH EFFECTS',
                    topics: [
                        'Fixed point and floating point number representation', 'ADC', 'quantization', 'truncation and rounding',
                        'quantization noise', 'input / output quantization', 'coefficient quantization error product quantization error',
                        'overflow error', 'limit cycle oscillations due to product quantization and summation', 'scaling to prevent overflow'
                    ]
                },
                {
                    number: 5,
                    name: 'DSP APPLICATIONS',
                    topics: [
                        'Multirate signal processing: Decimation, Interpolation, Sampling rate conversion by a rational factor',
                        'Adaptive Filters: Introduction, Applications of adaptive filtering to equalization', 'DSP Architecture',
                        'Fixed and Floating point architecture principles'
                    ]
                }
            ]
        },
        {
            name: 'EC3401 Networks and Security',
            units: [
                {
                    number: 1,
                    name: 'NETWORK MODELS AND DATALINK LAYER',
                    topics: [
                        'Overview of Networks and its Attributes', 'Network Models', 'OSI, TCP/IP, Addressing Introduction to Datalink Layer',
                        'Error Detection and Correction', 'Ethernet(802.3)', 'Wireless LAN', 'IEEE 802.11, Bluetooth', 'Flow and Error Control Protocols',
                        'HDLC', 'PPP'
                    ]
                },
                {
                    number: 2,
                    name: 'NETWORK LAYER PROTOCOLS',
                    topics: [
                        'Network Layer', 'IPv4 Addressing', 'Network Layer Protocols(IP,ICMP and Mobile IP)', 'Unicast and Multicast Routing',
                        'Intradomain and Interdomain Routing Protocols', 'IPv6 Addresses IPv6', 'Datagram Format', 'Transition from IPv4 to IPv6'
                    ]
                },
                {
                    number: 3,
                    name: 'TRANSPORT AND APPLICATION LAYERS',
                    topics: [
                        'Transport Layer Protocols', 'UDP and TCP Connection and State Transition Diagram Congestion Control and Avoidance(DEC bit, RED)',
                        'QoS', 'Application Layer Paradigms', 'Client - Server Programming', 'Domain Name System', 'World Wide Web, HTTP, Electronic Mail'
                    ]
                },
                {
                    number: 4,
                    name: 'NETWORK SECURITY',
                    topics: [
                        'OSI Security Architecture', 'Attacks', 'Security Services and Mechanisms', 'Encryption Advanced Encryption Standard',
                        'Public Key Cryptosystems', 'RSA Algorithm', 'Hash Functions', 'Secure Hash Algorithm', 'Digital Signature Algorithm'
                    ]
                },
                {
                    number: 5,
                    name: 'HARDWARE SECURITY',
                    topics: [
                        'Introduction to hardware security, Hardware Trojans, Side - Channel Attacks', 'Physical Attacks and Countermeasures',
                        'Design for Security', 'Introduction to Blockchain Technology'
                    ]
                }
            ]
        }
    ];

    subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';

        const subjectHeader = document.createElement('div');
        subjectHeader.className = 'subject-header';
        subjectHeader.textContent = subject.name;
        subjectHeader.addEventListener('click', () => toggleContent(subjectContent));

        const subjectContent = document.createElement('div');
        subjectContent.className = 'subject-content';

        subject.units.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit';

            const unitHeader = document.createElement('div');
            unitHeader.className = 'unit-header';
            unitHeader.textContent = `Unit ${unit.number}: ${unit.name}`;
            unitHeader.addEventListener('click', () => toggleContent(unitContent));

            const unitContent = document.createElement('div');
            unitContent.className = 'unit-content';

            unit.topics.forEach(topic => {
                const topicDiv = document.createElement('div');
                topicDiv.className = 'topic';
                topicDiv.textContent = topic;
                unitContent.appendChild(topicDiv);
            });

            unitDiv.appendChild(unitHeader);
            unitDiv.appendChild(unitContent);
            subjectContent.appendChild(unitDiv);
        });

        subjectDiv.appendChild(subjectHeader);
        subjectDiv.appendChild(subjectContent);
        syllabusContent.appendChild(subjectDiv);
    });

    function toggleContent(content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
});
