class SvgLanding extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        // 2 px.
        let svg_thin = `
        
        <svg width="1846" height="146" viewBox="0 0 1846 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="1846" height="146" fill="black">
        <rect fill="white" width="1846" height="146"/>
        <path d="M125.4 54.4C132.333 56.6667 138.2 59.8 143 63.8C147.8 67.8 151.4 72.4667 153.8 77.8C156.333 83.1333 157.6 89.0667 157.6 95.6C157.6 100.8 156.867 105.6 155.4 110C154.067 114.267 152.267 118 150 121.2C147.867 124.267 145 127.067 141.4 129.6C137.8 132 134.333 134 131 135.6C127.8 137.067 123.867 138.4 119.2 139.6C114.667 140.667 110.733 141.467 107.4 142C104.2 142.4 100.267 142.8 95.6 143.2C90.9333 143.467 87.4667 143.6 85.2 143.6C82.9333 143.6 80.0667 143.6 76.6 143.6C75.6667 143.6 75 143.6 74.6 143.6C68.2 143.6 62.1333 143.4 56.4 143C50.6667 142.6 45.6667 142.133 41.4 141.6C37.1333 140.933 33.1333 140.2 29.4 139.4C25.6667 138.467 22.5333 137.6 20 136.8C17.4667 135.867 15.1333 134.867 13 133.8C11 132.733 9.33333 131.8 8 131C6.8 130.067 5.73333 129.133 4.8 128.2C3.86667 127.267 3.2 126.533 2.8 126C2.53333 125.467 2.26667 125 2 124.6L32.4 99C32.6667 99.2667 32.8 99.4667 32.8 99.6C32.9333 99.7333 33.4667 100.133 34.4 100.8C35.3333 101.467 36.4 102.067 37.6 102.6C38.8 103 40.5333 103.6 42.8 104.4C45.2 105.067 47.8 105.667 50.6 106.2C53.4 106.6 57 107 61.4 107.4C65.8 107.667 70.6 107.8 75.8 107.8C89.8 107.8 99.3333 107 104.4 105.4C109.6 103.8 112.2 100.867 112.2 96.6C112.2 94.4667 111.533 92.6667 110.2 91.2C109 89.6 107 88.3333 104.2 87.4C101.4 86.3333 97.7333 85.6 93.2 85.2C88.8 84.6667 83.4 84.4 77 84.4C59.4 84.4 48.0667 87.1333 43 92.6L2.6 82.6L12.4 21L15.6 3.20001H33.4H149.2L148.2 40.6H52.4L49.2 60C50.8 56.6667 55.2667 54 62.6 52C69.9333 49.8667 76.9333 48.8 83.6 48.8C100.667 48.8 114.6 50.6667 125.4 54.4Z"/>
        <path d="M292.002 54.4C298.935 56.6667 304.802 59.8 309.602 63.8C314.402 67.8 318.002 72.4667 320.402 77.8C322.935 83.1333 324.202 89.0667 324.202 95.6C324.202 100.8 323.468 105.6 322.002 110C320.668 114.267 318.868 118 316.602 121.2C314.468 124.267 311.602 127.067 308.002 129.6C304.402 132 300.935 134 297.602 135.6C294.402 137.067 290.468 138.4 285.802 139.6C281.268 140.667 277.335 141.467 274.002 142C270.802 142.4 266.868 142.8 262.202 143.2C257.535 143.467 254.068 143.6 251.802 143.6C249.535 143.6 246.668 143.6 243.202 143.6C242.268 143.6 241.602 143.6 241.202 143.6C234.802 143.6 228.735 143.4 223.002 143C217.268 142.6 212.268 142.133 208.002 141.6C203.735 140.933 199.735 140.2 196.002 139.4C192.268 138.467 189.135 137.6 186.602 136.8C184.068 135.867 181.735 134.867 179.602 133.8C177.602 132.733 175.935 131.8 174.602 131C173.402 130.067 172.335 129.133 171.402 128.2C170.468 127.267 169.802 126.533 169.402 126C169.135 125.467 168.868 125 168.602 124.6L199.002 99C199.268 99.2667 199.402 99.4667 199.402 99.6C199.535 99.7333 200.068 100.133 201.002 100.8C201.935 101.467 203.002 102.067 204.202 102.6C205.402 103 207.135 103.6 209.402 104.4C211.802 105.067 214.402 105.667 217.202 106.2C220.002 106.6 223.602 107 228.002 107.4C232.402 107.667 237.202 107.8 242.402 107.8C256.402 107.8 265.935 107 271.002 105.4C276.202 103.8 278.802 100.867 278.802 96.6C278.802 94.4667 278.135 92.6667 276.802 91.2C275.602 89.6 273.602 88.3333 270.802 87.4C268.002 86.3333 264.335 85.6 259.802 85.2C255.402 84.6667 250.002 84.4 243.602 84.4C226.002 84.4 214.668 87.1333 209.602 92.6L169.202 82.6L179.002 21L182.202 3.20001H200.002H315.802L314.802 40.6H219.002L215.802 60C217.402 56.6667 221.868 54 229.202 52C236.535 49.8667 243.535 48.8 250.202 48.8C267.268 48.8 281.202 50.6667 292.002 54.4Z"/>
        <path d="M458.603 54.4C465.536 56.6667 471.403 59.8 476.203 63.8C481.003 67.8 484.603 72.4667 487.003 77.8C489.536 83.1333 490.803 89.0667 490.803 95.6C490.803 100.8 490.07 105.6 488.603 110C487.27 114.267 485.47 118 483.203 121.2C481.07 124.267 478.203 127.067 474.603 129.6C471.003 132 467.536 134 464.203 135.6C461.003 137.067 457.07 138.4 452.403 139.6C447.87 140.667 443.936 141.467 440.603 142C437.403 142.4 433.47 142.8 428.803 143.2C424.136 143.467 420.67 143.6 418.403 143.6C416.136 143.6 413.27 143.6 409.803 143.6C408.87 143.6 408.203 143.6 407.803 143.6C401.403 143.6 395.336 143.4 389.603 143C383.87 142.6 378.87 142.133 374.603 141.6C370.336 140.933 366.336 140.2 362.603 139.4C358.87 138.467 355.736 137.6 353.203 136.8C350.67 135.867 348.336 134.867 346.203 133.8C344.203 132.733 342.536 131.8 341.203 131C340.003 130.067 338.936 129.133 338.003 128.2C337.07 127.267 336.403 126.533 336.003 126C335.736 125.467 335.47 125 335.203 124.6L365.603 99C365.87 99.2667 366.003 99.4667 366.003 99.6C366.136 99.7333 366.67 100.133 367.603 100.8C368.536 101.467 369.603 102.067 370.803 102.6C372.003 103 373.736 103.6 376.003 104.4C378.403 105.067 381.003 105.667 383.803 106.2C386.603 106.6 390.203 107 394.603 107.4C399.003 107.667 403.803 107.8 409.003 107.8C423.003 107.8 432.536 107 437.603 105.4C442.803 103.8 445.403 100.867 445.403 96.6C445.403 94.4667 444.736 92.6667 443.403 91.2C442.203 89.6 440.203 88.3333 437.403 87.4C434.603 86.3333 430.936 85.6 426.403 85.2C422.003 84.6667 416.603 84.4 410.203 84.4C392.603 84.4 381.27 87.1333 376.203 92.6L335.803 82.6L345.603 21L348.803 3.20001H366.603H482.403L481.403 40.6H385.603L382.403 60C384.003 56.6667 388.47 54 395.803 52C403.136 49.8667 410.136 48.8 416.803 48.8C433.87 48.8 447.803 50.6667 458.603 54.4Z"/>
        <path d="M760.927 104.2C760.927 110.867 760.193 116.533 758.727 121.2C757.393 125.733 754.927 129.8 751.327 133.4C747.86 136.867 742.927 139.467 736.527 141.2C730.127 142.8 722.193 143.6 712.727 143.6H636.327H596.727V3.20001H696.727C706.193 3.20001 714.193 3.93334 720.727 5.4C727.393 6.86668 732.66 9.20001 736.527 12.4C740.527 15.4667 743.393 19.1333 745.127 23.4C746.86 27.5333 747.727 32.5333 747.727 38.4C747.727 51.0667 744.527 60.2 738.127 65.8C740.927 66.6 743.527 67.8667 745.927 69.6C748.46 71.2 750.927 73.4667 753.327 76.4C755.727 79.2 757.593 83 758.927 87.8C760.26 92.6 760.927 98.0667 760.927 104.2ZM643.527 42.2V55.6H696.127C697.993 55.6 699.527 54.9333 700.727 53.6C702.06 52.2667 702.727 50.6667 702.727 48.8C702.727 46.9333 702.06 45.4 700.727 44.2C699.527 42.8667 697.993 42.2 696.127 42.2H643.527ZM711.927 104.8C713.927 104.8 715.593 104.133 716.927 102.8C718.26 101.467 718.927 99.8667 718.927 98C718.927 96 718.26 94.3333 716.927 93C715.593 91.6667 713.927 91 711.927 91H643.527V104.8H711.927Z"/>
        <path d="M773.522 3.20001H928.522V42.2H820.122V54.6H921.722V92H820.122V104.6H928.522V143.6H773.522V3.20001Z"/>
        <path d="M1077.06 3.6L1140.06 143.6H1086.06L1075.46 120H1006.06L995.462 143.6H941.862L1004.66 3.6H1077.06ZM1022.66 79.6H1058.86L1040.66 42.8L1022.66 79.6Z"/>
        <path d="M1104.73 3.20001H1290.13V49.6H1220.73V143.6H1174.33V49.6H1104.73V3.20001Z"/>
        <path d="M1465.42 104.2C1465.42 110.867 1464.69 116.533 1463.22 121.2C1461.89 125.733 1459.42 129.8 1455.82 133.4C1452.35 136.867 1447.42 139.467 1441.02 141.2C1434.62 142.8 1426.69 143.6 1417.22 143.6H1340.82H1301.22V3.20001H1401.22C1410.69 3.20001 1418.69 3.93334 1425.22 5.4C1431.89 6.86668 1437.15 9.20001 1441.02 12.4C1445.02 15.4667 1447.89 19.1333 1449.62 23.4C1451.35 27.5333 1452.22 32.5333 1452.22 38.4C1452.22 51.0667 1449.02 60.2 1442.62 65.8C1445.42 66.6 1448.02 67.8667 1450.42 69.6C1452.95 71.2 1455.42 73.4667 1457.82 76.4C1460.22 79.2 1462.09 83 1463.42 87.8C1464.75 92.6 1465.42 98.0667 1465.42 104.2ZM1348.02 42.2V55.6H1400.62C1402.49 55.6 1404.02 54.9333 1405.22 53.6C1406.55 52.2667 1407.22 50.6667 1407.22 48.8C1407.22 46.9333 1406.55 45.4 1405.22 44.2C1404.02 42.8667 1402.49 42.2 1400.62 42.2H1348.02ZM1416.42 104.8C1418.42 104.8 1420.09 104.133 1421.42 102.8C1422.75 101.467 1423.42 99.8667 1423.42 98C1423.42 96 1422.75 94.3333 1421.42 93C1420.09 91.6667 1418.42 91 1416.42 91H1348.02V104.8H1416.42Z"/>
        <path d="M1562.97 1C1575.64 1 1586.84 1.73334 1596.57 3.20001C1606.31 4.53334 1615.31 6.86667 1623.57 10.2C1631.84 13.5333 1638.57 17.9333 1643.77 23.4C1649.11 28.7333 1653.24 35.5333 1656.17 43.8C1659.11 51.9333 1660.57 61.5333 1660.57 72.6C1660.57 83.5333 1659.24 93 1656.57 101C1654.04 109 1650.31 115.8 1645.37 121.4C1640.57 126.867 1634.17 131.333 1626.17 134.8C1618.31 138.133 1609.37 140.533 1599.37 142C1589.37 143.467 1577.71 144.2 1564.37 144.2C1531.31 144.2 1507.24 138.2 1492.17 126.2C1477.24 114.067 1469.77 95.3333 1469.77 70C1469.77 46.5333 1477.44 29.2 1492.77 18C1508.11 6.66667 1531.51 1 1562.97 1ZM1564.77 107.4C1578.91 107.4 1589.84 104.533 1597.57 98.8C1605.31 93.0667 1609.17 84.3333 1609.17 72.6C1609.17 61.2667 1605.11 52.6667 1596.97 46.8C1588.84 40.8 1577.91 37.8 1564.17 37.8C1556.97 37.8 1550.64 38.6 1545.17 40.2C1539.71 41.6667 1535.17 43.9333 1531.57 47C1528.11 50.0667 1525.51 53.7333 1523.77 58C1522.04 62.2667 1521.17 67.1333 1521.17 72.6C1521.17 83.1333 1524.84 91.6 1532.17 98C1539.51 104.267 1550.37 107.4 1564.77 107.4Z"/>
        <path d="M1843.2 3.20001L1779.4 73.4L1842.6 143.6H1779.8L1743.4 103.8L1706.4 143.6H1643.6L1707.4 73.4L1644.2 3.20001H1707L1743.6 43L1780.4 3.20001H1843.2Z"/>
        </mask>
        <path d="M125.4 54.4C132.333 56.6667 138.2 59.8 143 63.8C147.8 67.8 151.4 72.4667 153.8 77.8C156.333 83.1333 157.6 89.0667 157.6 95.6C157.6 100.8 156.867 105.6 155.4 110C154.067 114.267 152.267 118 150 121.2C147.867 124.267 145 127.067 141.4 129.6C137.8 132 134.333 134 131 135.6C127.8 137.067 123.867 138.4 119.2 139.6C114.667 140.667 110.733 141.467 107.4 142C104.2 142.4 100.267 142.8 95.6 143.2C90.9333 143.467 87.4667 143.6 85.2 143.6C82.9333 143.6 80.0667 143.6 76.6 143.6C75.6667 143.6 75 143.6 74.6 143.6C68.2 143.6 62.1333 143.4 56.4 143C50.6667 142.6 45.6667 142.133 41.4 141.6C37.1333 140.933 33.1333 140.2 29.4 139.4C25.6667 138.467 22.5333 137.6 20 136.8C17.4667 135.867 15.1333 134.867 13 133.8C11 132.733 9.33333 131.8 8 131C6.8 130.067 5.73333 129.133 4.8 128.2C3.86667 127.267 3.2 126.533 2.8 126C2.53333 125.467 2.26667 125 2 124.6L32.4 99C32.6667 99.2667 32.8 99.4667 32.8 99.6C32.9333 99.7333 33.4667 100.133 34.4 100.8C35.3333 101.467 36.4 102.067 37.6 102.6C38.8 103 40.5333 103.6 42.8 104.4C45.2 105.067 47.8 105.667 50.6 106.2C53.4 106.6 57 107 61.4 107.4C65.8 107.667 70.6 107.8 75.8 107.8C89.8 107.8 99.3333 107 104.4 105.4C109.6 103.8 112.2 100.867 112.2 96.6C112.2 94.4667 111.533 92.6667 110.2 91.2C109 89.6 107 88.3333 104.2 87.4C101.4 86.3333 97.7333 85.6 93.2 85.2C88.8 84.6667 83.4 84.4 77 84.4C59.4 84.4 48.0667 87.1333 43 92.6L2.6 82.6L12.4 21L15.6 3.20001H33.4H149.2L148.2 40.6H52.4L49.2 60C50.8 56.6667 55.2667 54 62.6 52C69.9333 49.8667 76.9333 48.8 83.6 48.8C100.667 48.8 114.6 50.6667 125.4 54.4Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M292.002 54.4C298.935 56.6667 304.802 59.8 309.602 63.8C314.402 67.8 318.002 72.4667 320.402 77.8C322.935 83.1333 324.202 89.0667 324.202 95.6C324.202 100.8 323.468 105.6 322.002 110C320.668 114.267 318.868 118 316.602 121.2C314.468 124.267 311.602 127.067 308.002 129.6C304.402 132 300.935 134 297.602 135.6C294.402 137.067 290.468 138.4 285.802 139.6C281.268 140.667 277.335 141.467 274.002 142C270.802 142.4 266.868 142.8 262.202 143.2C257.535 143.467 254.068 143.6 251.802 143.6C249.535 143.6 246.668 143.6 243.202 143.6C242.268 143.6 241.602 143.6 241.202 143.6C234.802 143.6 228.735 143.4 223.002 143C217.268 142.6 212.268 142.133 208.002 141.6C203.735 140.933 199.735 140.2 196.002 139.4C192.268 138.467 189.135 137.6 186.602 136.8C184.068 135.867 181.735 134.867 179.602 133.8C177.602 132.733 175.935 131.8 174.602 131C173.402 130.067 172.335 129.133 171.402 128.2C170.468 127.267 169.802 126.533 169.402 126C169.135 125.467 168.868 125 168.602 124.6L199.002 99C199.268 99.2667 199.402 99.4667 199.402 99.6C199.535 99.7333 200.068 100.133 201.002 100.8C201.935 101.467 203.002 102.067 204.202 102.6C205.402 103 207.135 103.6 209.402 104.4C211.802 105.067 214.402 105.667 217.202 106.2C220.002 106.6 223.602 107 228.002 107.4C232.402 107.667 237.202 107.8 242.402 107.8C256.402 107.8 265.935 107 271.002 105.4C276.202 103.8 278.802 100.867 278.802 96.6C278.802 94.4667 278.135 92.6667 276.802 91.2C275.602 89.6 273.602 88.3333 270.802 87.4C268.002 86.3333 264.335 85.6 259.802 85.2C255.402 84.6667 250.002 84.4 243.602 84.4C226.002 84.4 214.668 87.1333 209.602 92.6L169.202 82.6L179.002 21L182.202 3.20001H200.002H315.802L314.802 40.6H219.002L215.802 60C217.402 56.6667 221.868 54 229.202 52C236.535 49.8667 243.535 48.8 250.202 48.8C267.268 48.8 281.202 50.6667 292.002 54.4Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M458.603 54.4C465.536 56.6667 471.403 59.8 476.203 63.8C481.003 67.8 484.603 72.4667 487.003 77.8C489.536 83.1333 490.803 89.0667 490.803 95.6C490.803 100.8 490.07 105.6 488.603 110C487.27 114.267 485.47 118 483.203 121.2C481.07 124.267 478.203 127.067 474.603 129.6C471.003 132 467.536 134 464.203 135.6C461.003 137.067 457.07 138.4 452.403 139.6C447.87 140.667 443.936 141.467 440.603 142C437.403 142.4 433.47 142.8 428.803 143.2C424.136 143.467 420.67 143.6 418.403 143.6C416.136 143.6 413.27 143.6 409.803 143.6C408.87 143.6 408.203 143.6 407.803 143.6C401.403 143.6 395.336 143.4 389.603 143C383.87 142.6 378.87 142.133 374.603 141.6C370.336 140.933 366.336 140.2 362.603 139.4C358.87 138.467 355.736 137.6 353.203 136.8C350.67 135.867 348.336 134.867 346.203 133.8C344.203 132.733 342.536 131.8 341.203 131C340.003 130.067 338.936 129.133 338.003 128.2C337.07 127.267 336.403 126.533 336.003 126C335.736 125.467 335.47 125 335.203 124.6L365.603 99C365.87 99.2667 366.003 99.4667 366.003 99.6C366.136 99.7333 366.67 100.133 367.603 100.8C368.536 101.467 369.603 102.067 370.803 102.6C372.003 103 373.736 103.6 376.003 104.4C378.403 105.067 381.003 105.667 383.803 106.2C386.603 106.6 390.203 107 394.603 107.4C399.003 107.667 403.803 107.8 409.003 107.8C423.003 107.8 432.536 107 437.603 105.4C442.803 103.8 445.403 100.867 445.403 96.6C445.403 94.4667 444.736 92.6667 443.403 91.2C442.203 89.6 440.203 88.3333 437.403 87.4C434.603 86.3333 430.936 85.6 426.403 85.2C422.003 84.6667 416.603 84.4 410.203 84.4C392.603 84.4 381.27 87.1333 376.203 92.6L335.803 82.6L345.603 21L348.803 3.20001H366.603H482.403L481.403 40.6H385.603L382.403 60C384.003 56.6667 388.47 54 395.803 52C403.136 49.8667 410.136 48.8 416.803 48.8C433.87 48.8 447.803 50.6667 458.603 54.4Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M760.927 104.2C760.927 110.867 760.193 116.533 758.727 121.2C757.393 125.733 754.927 129.8 751.327 133.4C747.86 136.867 742.927 139.467 736.527 141.2C730.127 142.8 722.193 143.6 712.727 143.6H636.327H596.727V3.20001H696.727C706.193 3.20001 714.193 3.93334 720.727 5.4C727.393 6.86668 732.66 9.20001 736.527 12.4C740.527 15.4667 743.393 19.1333 745.127 23.4C746.86 27.5333 747.727 32.5333 747.727 38.4C747.727 51.0667 744.527 60.2 738.127 65.8C740.927 66.6 743.527 67.8667 745.927 69.6C748.46 71.2 750.927 73.4667 753.327 76.4C755.727 79.2 757.593 83 758.927 87.8C760.26 92.6 760.927 98.0667 760.927 104.2ZM643.527 42.2V55.6H696.127C697.993 55.6 699.527 54.9333 700.727 53.6C702.06 52.2667 702.727 50.6667 702.727 48.8C702.727 46.9333 702.06 45.4 700.727 44.2C699.527 42.8667 697.993 42.2 696.127 42.2H643.527ZM711.927 104.8C713.927 104.8 715.593 104.133 716.927 102.8C718.26 101.467 718.927 99.8667 718.927 98C718.927 96 718.26 94.3333 716.927 93C715.593 91.6667 713.927 91 711.927 91H643.527V104.8H711.927Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M773.522 3.20001H928.522V42.2H820.122V54.6H921.722V92H820.122V104.6H928.522V143.6H773.522V3.20001Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M1077.06 3.6L1140.06 143.6H1086.06L1075.46 120H1006.06L995.462 143.6H941.862L1004.66 3.6H1077.06ZM1022.66 79.6H1058.86L1040.66 42.8L1022.66 79.6Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M1104.73 3.20001H1290.13V49.6H1220.73V143.6H1174.33V49.6H1104.73V3.20001Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M1465.42 104.2C1465.42 110.867 1464.69 116.533 1463.22 121.2C1461.89 125.733 1459.42 129.8 1455.82 133.4C1452.35 136.867 1447.42 139.467 1441.02 141.2C1434.62 142.8 1426.69 143.6 1417.22 143.6H1340.82H1301.22V3.20001H1401.22C1410.69 3.20001 1418.69 3.93334 1425.22 5.4C1431.89 6.86668 1437.15 9.20001 1441.02 12.4C1445.02 15.4667 1447.89 19.1333 1449.62 23.4C1451.35 27.5333 1452.22 32.5333 1452.22 38.4C1452.22 51.0667 1449.02 60.2 1442.62 65.8C1445.42 66.6 1448.02 67.8667 1450.42 69.6C1452.95 71.2 1455.42 73.4667 1457.82 76.4C1460.22 79.2 1462.09 83 1463.42 87.8C1464.75 92.6 1465.42 98.0667 1465.42 104.2ZM1348.02 42.2V55.6H1400.62C1402.49 55.6 1404.02 54.9333 1405.22 53.6C1406.55 52.2667 1407.22 50.6667 1407.22 48.8C1407.22 46.9333 1406.55 45.4 1405.22 44.2C1404.02 42.8667 1402.49 42.2 1400.62 42.2H1348.02ZM1416.42 104.8C1418.42 104.8 1420.09 104.133 1421.42 102.8C1422.75 101.467 1423.42 99.8667 1423.42 98C1423.42 96 1422.75 94.3333 1421.42 93C1420.09 91.6667 1418.42 91 1416.42 91H1348.02V104.8H1416.42Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M1562.97 1C1575.64 1 1586.84 1.73334 1596.57 3.20001C1606.31 4.53334 1615.31 6.86667 1623.57 10.2C1631.84 13.5333 1638.57 17.9333 1643.77 23.4C1649.11 28.7333 1653.24 35.5333 1656.17 43.8C1659.11 51.9333 1660.57 61.5333 1660.57 72.6C1660.57 83.5333 1659.24 93 1656.57 101C1654.04 109 1650.31 115.8 1645.37 121.4C1640.57 126.867 1634.17 131.333 1626.17 134.8C1618.31 138.133 1609.37 140.533 1599.37 142C1589.37 143.467 1577.71 144.2 1564.37 144.2C1531.31 144.2 1507.24 138.2 1492.17 126.2C1477.24 114.067 1469.77 95.3333 1469.77 70C1469.77 46.5333 1477.44 29.2 1492.77 18C1508.11 6.66667 1531.51 1 1562.97 1ZM1564.77 107.4C1578.91 107.4 1589.84 104.533 1597.57 98.8C1605.31 93.0667 1609.17 84.3333 1609.17 72.6C1609.17 61.2667 1605.11 52.6667 1596.97 46.8C1588.84 40.8 1577.91 37.8 1564.17 37.8C1556.97 37.8 1550.64 38.6 1545.17 40.2C1539.71 41.6667 1535.17 43.9333 1531.57 47C1528.11 50.0667 1525.51 53.7333 1523.77 58C1522.04 62.2667 1521.17 67.1333 1521.17 72.6C1521.17 83.1333 1524.84 91.6 1532.17 98C1539.51 104.267 1550.37 107.4 1564.77 107.4Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        <path d="M1843.2 3.20001L1779.4 73.4L1842.6 143.6H1779.8L1743.4 103.8L1706.4 143.6H1643.6L1707.4 73.4L1644.2 3.20001H1707L1743.6 43L1780.4 3.20001H1843.2Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1)"/>
        </svg>

        `;

        // 4 px.
        let svg_thic = `
        
        <svg width="1849" height="148" viewBox="0 0 1849 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="1849" height="148" fill="black">
        <rect fill="white" width="1849" height="148"/>
        <path d="M126.4 55.4C133.333 57.6667 139.2 60.8 144 64.8C148.8 68.8 152.4 73.4667 154.8 78.8C157.333 84.1333 158.6 90.0667 158.6 96.6C158.6 101.8 157.867 106.6 156.4 111C155.067 115.267 153.267 119 151 122.2C148.867 125.267 146 128.067 142.4 130.6C138.8 133 135.333 135 132 136.6C128.8 138.067 124.867 139.4 120.2 140.6C115.667 141.667 111.733 142.467 108.4 143C105.2 143.4 101.267 143.8 96.6 144.2C91.9333 144.467 88.4667 144.6 86.2 144.6C83.9333 144.6 81.0667 144.6 77.6 144.6C76.6667 144.6 76 144.6 75.6 144.6C69.2 144.6 63.1333 144.4 57.4 144C51.6667 143.6 46.6667 143.133 42.4 142.6C38.1333 141.933 34.1333 141.2 30.4 140.4C26.6667 139.467 23.5333 138.6 21 137.8C18.4667 136.867 16.1333 135.867 14 134.8C12 133.733 10.3333 132.8 9 132C7.8 131.067 6.73333 130.133 5.8 129.2C4.86667 128.267 4.2 127.533 3.8 127C3.53333 126.467 3.26667 126 3 125.6L33.4 100C33.6667 100.267 33.8 100.467 33.8 100.6C33.9333 100.733 34.4667 101.133 35.4 101.8C36.3333 102.467 37.4 103.067 38.6 103.6C39.8 104 41.5333 104.6 43.8 105.4C46.2 106.067 48.8 106.667 51.6 107.2C54.4 107.6 58 108 62.4 108.4C66.8 108.667 71.6 108.8 76.8 108.8C90.8 108.8 100.333 108 105.4 106.4C110.6 104.8 113.2 101.867 113.2 97.6C113.2 95.4667 112.533 93.6667 111.2 92.2C110 90.6 108 89.3333 105.2 88.4C102.4 87.3333 98.7333 86.6 94.2 86.2C89.8 85.6667 84.4 85.4 78 85.4C60.4 85.4 49.0667 88.1333 44 93.6L3.6 83.6L13.4 22L16.6 4.20001H34.4H150.2L149.2 41.6H53.4L50.2 61C51.8 57.6667 56.2667 55 63.6 53C70.9333 50.8667 77.9333 49.8 84.6 49.8C101.667 49.8 115.6 51.6667 126.4 55.4Z"/>
        <path d="M293.002 55.4C299.935 57.6667 305.802 60.8 310.602 64.8C315.402 68.8 319.002 73.4667 321.402 78.8C323.935 84.1333 325.202 90.0667 325.202 96.6C325.202 101.8 324.468 106.6 323.002 111C321.668 115.267 319.868 119 317.602 122.2C315.468 125.267 312.602 128.067 309.002 130.6C305.402 133 301.935 135 298.602 136.6C295.402 138.067 291.468 139.4 286.802 140.6C282.268 141.667 278.335 142.467 275.002 143C271.802 143.4 267.868 143.8 263.202 144.2C258.535 144.467 255.068 144.6 252.802 144.6C250.535 144.6 247.668 144.6 244.202 144.6C243.268 144.6 242.602 144.6 242.202 144.6C235.802 144.6 229.735 144.4 224.002 144C218.268 143.6 213.268 143.133 209.002 142.6C204.735 141.933 200.735 141.2 197.002 140.4C193.268 139.467 190.135 138.6 187.602 137.8C185.068 136.867 182.735 135.867 180.602 134.8C178.602 133.733 176.935 132.8 175.602 132C174.402 131.067 173.335 130.133 172.402 129.2C171.468 128.267 170.802 127.533 170.402 127C170.135 126.467 169.868 126 169.602 125.6L200.002 100C200.268 100.267 200.402 100.467 200.402 100.6C200.535 100.733 201.068 101.133 202.002 101.8C202.935 102.467 204.002 103.067 205.202 103.6C206.402 104 208.135 104.6 210.402 105.4C212.802 106.067 215.402 106.667 218.202 107.2C221.002 107.6 224.602 108 229.002 108.4C233.402 108.667 238.202 108.8 243.402 108.8C257.402 108.8 266.935 108 272.002 106.4C277.202 104.8 279.802 101.867 279.802 97.6C279.802 95.4667 279.135 93.6667 277.802 92.2C276.602 90.6 274.602 89.3333 271.802 88.4C269.002 87.3333 265.335 86.6 260.802 86.2C256.402 85.6667 251.002 85.4 244.602 85.4C227.002 85.4 215.668 88.1333 210.602 93.6L170.202 83.6L180.002 22L183.202 4.20001H201.002H316.802L315.802 41.6H220.002L216.802 61C218.402 57.6667 222.868 55 230.202 53C237.535 50.8667 244.535 49.8 251.202 49.8C268.268 49.8 282.202 51.6667 293.002 55.4Z"/>
        <path d="M459.603 55.4C466.536 57.6667 472.403 60.8 477.203 64.8C482.003 68.8 485.603 73.4667 488.003 78.8C490.536 84.1333 491.803 90.0667 491.803 96.6C491.803 101.8 491.07 106.6 489.603 111C488.27 115.267 486.47 119 484.203 122.2C482.07 125.267 479.203 128.067 475.603 130.6C472.003 133 468.536 135 465.203 136.6C462.003 138.067 458.07 139.4 453.403 140.6C448.87 141.667 444.936 142.467 441.603 143C438.403 143.4 434.47 143.8 429.803 144.2C425.136 144.467 421.67 144.6 419.403 144.6C417.136 144.6 414.27 144.6 410.803 144.6C409.87 144.6 409.203 144.6 408.803 144.6C402.403 144.6 396.336 144.4 390.603 144C384.87 143.6 379.87 143.133 375.603 142.6C371.336 141.933 367.336 141.2 363.603 140.4C359.87 139.467 356.736 138.6 354.203 137.8C351.67 136.867 349.336 135.867 347.203 134.8C345.203 133.733 343.536 132.8 342.203 132C341.003 131.067 339.936 130.133 339.003 129.2C338.07 128.267 337.403 127.533 337.003 127C336.736 126.467 336.47 126 336.203 125.6L366.603 100C366.87 100.267 367.003 100.467 367.003 100.6C367.136 100.733 367.67 101.133 368.603 101.8C369.536 102.467 370.603 103.067 371.803 103.6C373.003 104 374.736 104.6 377.003 105.4C379.403 106.067 382.003 106.667 384.803 107.2C387.603 107.6 391.203 108 395.603 108.4C400.003 108.667 404.803 108.8 410.003 108.8C424.003 108.8 433.536 108 438.603 106.4C443.803 104.8 446.403 101.867 446.403 97.6C446.403 95.4667 445.736 93.6667 444.403 92.2C443.203 90.6 441.203 89.3333 438.403 88.4C435.603 87.3333 431.936 86.6 427.403 86.2C423.003 85.6667 417.603 85.4 411.203 85.4C393.603 85.4 382.27 88.1333 377.203 93.6L336.803 83.6L346.603 22L349.803 4.20001H367.603H483.403L482.403 41.6H386.603L383.403 61C385.003 57.6667 389.47 55 396.803 53C404.136 50.8667 411.136 49.8 417.803 49.8C434.87 49.8 448.803 51.6667 459.603 55.4Z"/>
        <path d="M761.927 105.2C761.927 111.867 761.193 117.533 759.727 122.2C758.393 126.733 755.927 130.8 752.327 134.4C748.86 137.867 743.927 140.467 737.527 142.2C731.127 143.8 723.193 144.6 713.727 144.6H637.327H597.727V4.20001H697.727C707.193 4.20001 715.193 4.93334 721.727 6.4C728.393 7.86668 733.66 10.2 737.527 13.4C741.527 16.4667 744.393 20.1333 746.127 24.4C747.86 28.5333 748.727 33.5333 748.727 39.4C748.727 52.0667 745.527 61.2 739.127 66.8C741.927 67.6 744.527 68.8667 746.927 70.6C749.46 72.2 751.927 74.4667 754.327 77.4C756.727 80.2 758.593 84 759.927 88.8C761.26 93.6 761.927 99.0667 761.927 105.2ZM644.527 43.2V56.6H697.127C698.993 56.6 700.527 55.9333 701.727 54.6C703.06 53.2667 703.727 51.6667 703.727 49.8C703.727 47.9333 703.06 46.4 701.727 45.2C700.527 43.8667 698.993 43.2 697.127 43.2H644.527ZM712.927 105.8C714.927 105.8 716.593 105.133 717.927 103.8C719.26 102.467 719.927 100.867 719.927 99C719.927 97 719.26 95.3333 717.927 94C716.593 92.6667 714.927 92 712.927 92H644.527V105.8H712.927Z"/>
        <path d="M774.522 4.20001H929.522V43.2H821.122V55.6H922.722V93H821.122V105.6H929.522V144.6H774.522V4.20001Z"/>
        <path d="M1078.06 4.6L1141.06 144.6H1087.06L1076.46 121H1007.06L996.462 144.6H942.862L1005.66 4.6H1078.06ZM1023.66 80.6H1059.86L1041.66 43.8L1023.66 80.6Z"/>
        <path d="M1105.73 4.20001H1291.13V50.6H1221.73V144.6H1175.33V50.6H1105.73V4.20001Z"/>
        <path d="M1466.42 105.2C1466.42 111.867 1465.69 117.533 1464.22 122.2C1462.89 126.733 1460.42 130.8 1456.82 134.4C1453.35 137.867 1448.42 140.467 1442.02 142.2C1435.62 143.8 1427.69 144.6 1418.22 144.6H1341.82H1302.22V4.20001H1402.22C1411.69 4.20001 1419.69 4.93334 1426.22 6.4C1432.89 7.86668 1438.15 10.2 1442.02 13.4C1446.02 16.4667 1448.89 20.1333 1450.62 24.4C1452.35 28.5333 1453.22 33.5333 1453.22 39.4C1453.22 52.0667 1450.02 61.2 1443.62 66.8C1446.42 67.6 1449.02 68.8667 1451.42 70.6C1453.95 72.2 1456.42 74.4667 1458.82 77.4C1461.22 80.2 1463.09 84 1464.42 88.8C1465.75 93.6 1466.42 99.0667 1466.42 105.2ZM1349.02 43.2V56.6H1401.62C1403.49 56.6 1405.02 55.9333 1406.22 54.6C1407.55 53.2667 1408.22 51.6667 1408.22 49.8C1408.22 47.9333 1407.55 46.4 1406.22 45.2C1405.02 43.8667 1403.49 43.2 1401.62 43.2H1349.02ZM1417.42 105.8C1419.42 105.8 1421.09 105.133 1422.42 103.8C1423.75 102.467 1424.42 100.867 1424.42 99C1424.42 97 1423.75 95.3333 1422.42 94C1421.09 92.6667 1419.42 92 1417.42 92H1349.02V105.8H1417.42Z"/>
        <path d="M1563.97 2C1576.64 2 1587.84 2.73334 1597.57 4.20001C1607.31 5.53334 1616.31 7.86667 1624.57 11.2C1632.84 14.5333 1639.57 18.9333 1644.77 24.4C1650.11 29.7333 1654.24 36.5333 1657.17 44.8C1660.11 52.9333 1661.57 62.5333 1661.57 73.6C1661.57 84.5333 1660.24 94 1657.57 102C1655.04 110 1651.31 116.8 1646.37 122.4C1641.57 127.867 1635.17 132.333 1627.17 135.8C1619.31 139.133 1610.37 141.533 1600.37 143C1590.37 144.467 1578.71 145.2 1565.37 145.2C1532.31 145.2 1508.24 139.2 1493.17 127.2C1478.24 115.067 1470.77 96.3333 1470.77 71C1470.77 47.5333 1478.44 30.2 1493.77 19C1509.11 7.66667 1532.51 2 1563.97 2ZM1565.77 108.4C1579.91 108.4 1590.84 105.533 1598.57 99.8C1606.31 94.0667 1610.17 85.3333 1610.17 73.6C1610.17 62.2667 1606.11 53.6667 1597.97 47.8C1589.84 41.8 1578.91 38.8 1565.17 38.8C1557.97 38.8 1551.64 39.6 1546.17 41.2C1540.71 42.6667 1536.17 44.9333 1532.57 48C1529.11 51.0667 1526.51 54.7333 1524.77 59C1523.04 63.2667 1522.17 68.1333 1522.17 73.6C1522.17 84.1333 1525.84 92.6 1533.17 99C1540.51 105.267 1551.37 108.4 1565.77 108.4Z"/>
        <path d="M1844.2 4.20001L1780.4 74.4L1843.6 144.6H1780.8L1744.4 104.8L1707.4 144.6H1644.6L1708.4 74.4L1645.2 4.20001H1708L1744.6 44L1781.4 4.20001H1844.2Z"/>
        </mask>
        <path d="M126.4 55.4C133.333 57.6667 139.2 60.8 144 64.8C148.8 68.8 152.4 73.4667 154.8 78.8C157.333 84.1333 158.6 90.0667 158.6 96.6C158.6 101.8 157.867 106.6 156.4 111C155.067 115.267 153.267 119 151 122.2C148.867 125.267 146 128.067 142.4 130.6C138.8 133 135.333 135 132 136.6C128.8 138.067 124.867 139.4 120.2 140.6C115.667 141.667 111.733 142.467 108.4 143C105.2 143.4 101.267 143.8 96.6 144.2C91.9333 144.467 88.4667 144.6 86.2 144.6C83.9333 144.6 81.0667 144.6 77.6 144.6C76.6667 144.6 76 144.6 75.6 144.6C69.2 144.6 63.1333 144.4 57.4 144C51.6667 143.6 46.6667 143.133 42.4 142.6C38.1333 141.933 34.1333 141.2 30.4 140.4C26.6667 139.467 23.5333 138.6 21 137.8C18.4667 136.867 16.1333 135.867 14 134.8C12 133.733 10.3333 132.8 9 132C7.8 131.067 6.73333 130.133 5.8 129.2C4.86667 128.267 4.2 127.533 3.8 127C3.53333 126.467 3.26667 126 3 125.6L33.4 100C33.6667 100.267 33.8 100.467 33.8 100.6C33.9333 100.733 34.4667 101.133 35.4 101.8C36.3333 102.467 37.4 103.067 38.6 103.6C39.8 104 41.5333 104.6 43.8 105.4C46.2 106.067 48.8 106.667 51.6 107.2C54.4 107.6 58 108 62.4 108.4C66.8 108.667 71.6 108.8 76.8 108.8C90.8 108.8 100.333 108 105.4 106.4C110.6 104.8 113.2 101.867 113.2 97.6C113.2 95.4667 112.533 93.6667 111.2 92.2C110 90.6 108 89.3333 105.2 88.4C102.4 87.3333 98.7333 86.6 94.2 86.2C89.8 85.6667 84.4 85.4 78 85.4C60.4 85.4 49.0667 88.1333 44 93.6L3.6 83.6L13.4 22L16.6 4.20001H34.4H150.2L149.2 41.6H53.4L50.2 61C51.8 57.6667 56.2667 55 63.6 53C70.9333 50.8667 77.9333 49.8 84.6 49.8C101.667 49.8 115.6 51.6667 126.4 55.4Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M293.002 55.4C299.935 57.6667 305.802 60.8 310.602 64.8C315.402 68.8 319.002 73.4667 321.402 78.8C323.935 84.1333 325.202 90.0667 325.202 96.6C325.202 101.8 324.468 106.6 323.002 111C321.668 115.267 319.868 119 317.602 122.2C315.468 125.267 312.602 128.067 309.002 130.6C305.402 133 301.935 135 298.602 136.6C295.402 138.067 291.468 139.4 286.802 140.6C282.268 141.667 278.335 142.467 275.002 143C271.802 143.4 267.868 143.8 263.202 144.2C258.535 144.467 255.068 144.6 252.802 144.6C250.535 144.6 247.668 144.6 244.202 144.6C243.268 144.6 242.602 144.6 242.202 144.6C235.802 144.6 229.735 144.4 224.002 144C218.268 143.6 213.268 143.133 209.002 142.6C204.735 141.933 200.735 141.2 197.002 140.4C193.268 139.467 190.135 138.6 187.602 137.8C185.068 136.867 182.735 135.867 180.602 134.8C178.602 133.733 176.935 132.8 175.602 132C174.402 131.067 173.335 130.133 172.402 129.2C171.468 128.267 170.802 127.533 170.402 127C170.135 126.467 169.868 126 169.602 125.6L200.002 100C200.268 100.267 200.402 100.467 200.402 100.6C200.535 100.733 201.068 101.133 202.002 101.8C202.935 102.467 204.002 103.067 205.202 103.6C206.402 104 208.135 104.6 210.402 105.4C212.802 106.067 215.402 106.667 218.202 107.2C221.002 107.6 224.602 108 229.002 108.4C233.402 108.667 238.202 108.8 243.402 108.8C257.402 108.8 266.935 108 272.002 106.4C277.202 104.8 279.802 101.867 279.802 97.6C279.802 95.4667 279.135 93.6667 277.802 92.2C276.602 90.6 274.602 89.3333 271.802 88.4C269.002 87.3333 265.335 86.6 260.802 86.2C256.402 85.6667 251.002 85.4 244.602 85.4C227.002 85.4 215.668 88.1333 210.602 93.6L170.202 83.6L180.002 22L183.202 4.20001H201.002H316.802L315.802 41.6H220.002L216.802 61C218.402 57.6667 222.868 55 230.202 53C237.535 50.8667 244.535 49.8 251.202 49.8C268.268 49.8 282.202 51.6667 293.002 55.4Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M459.603 55.4C466.536 57.6667 472.403 60.8 477.203 64.8C482.003 68.8 485.603 73.4667 488.003 78.8C490.536 84.1333 491.803 90.0667 491.803 96.6C491.803 101.8 491.07 106.6 489.603 111C488.27 115.267 486.47 119 484.203 122.2C482.07 125.267 479.203 128.067 475.603 130.6C472.003 133 468.536 135 465.203 136.6C462.003 138.067 458.07 139.4 453.403 140.6C448.87 141.667 444.936 142.467 441.603 143C438.403 143.4 434.47 143.8 429.803 144.2C425.136 144.467 421.67 144.6 419.403 144.6C417.136 144.6 414.27 144.6 410.803 144.6C409.87 144.6 409.203 144.6 408.803 144.6C402.403 144.6 396.336 144.4 390.603 144C384.87 143.6 379.87 143.133 375.603 142.6C371.336 141.933 367.336 141.2 363.603 140.4C359.87 139.467 356.736 138.6 354.203 137.8C351.67 136.867 349.336 135.867 347.203 134.8C345.203 133.733 343.536 132.8 342.203 132C341.003 131.067 339.936 130.133 339.003 129.2C338.07 128.267 337.403 127.533 337.003 127C336.736 126.467 336.47 126 336.203 125.6L366.603 100C366.87 100.267 367.003 100.467 367.003 100.6C367.136 100.733 367.67 101.133 368.603 101.8C369.536 102.467 370.603 103.067 371.803 103.6C373.003 104 374.736 104.6 377.003 105.4C379.403 106.067 382.003 106.667 384.803 107.2C387.603 107.6 391.203 108 395.603 108.4C400.003 108.667 404.803 108.8 410.003 108.8C424.003 108.8 433.536 108 438.603 106.4C443.803 104.8 446.403 101.867 446.403 97.6C446.403 95.4667 445.736 93.6667 444.403 92.2C443.203 90.6 441.203 89.3333 438.403 88.4C435.603 87.3333 431.936 86.6 427.403 86.2C423.003 85.6667 417.603 85.4 411.203 85.4C393.603 85.4 382.27 88.1333 377.203 93.6L336.803 83.6L346.603 22L349.803 4.20001H367.603H483.403L482.403 41.6H386.603L383.403 61C385.003 57.6667 389.47 55 396.803 53C404.136 50.8667 411.136 49.8 417.803 49.8C434.87 49.8 448.803 51.6667 459.603 55.4Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M761.927 105.2C761.927 111.867 761.193 117.533 759.727 122.2C758.393 126.733 755.927 130.8 752.327 134.4C748.86 137.867 743.927 140.467 737.527 142.2C731.127 143.8 723.193 144.6 713.727 144.6H637.327H597.727V4.20001H697.727C707.193 4.20001 715.193 4.93334 721.727 6.4C728.393 7.86668 733.66 10.2 737.527 13.4C741.527 16.4667 744.393 20.1333 746.127 24.4C747.86 28.5333 748.727 33.5333 748.727 39.4C748.727 52.0667 745.527 61.2 739.127 66.8C741.927 67.6 744.527 68.8667 746.927 70.6C749.46 72.2 751.927 74.4667 754.327 77.4C756.727 80.2 758.593 84 759.927 88.8C761.26 93.6 761.927 99.0667 761.927 105.2ZM644.527 43.2V56.6H697.127C698.993 56.6 700.527 55.9333 701.727 54.6C703.06 53.2667 703.727 51.6667 703.727 49.8C703.727 47.9333 703.06 46.4 701.727 45.2C700.527 43.8667 698.993 43.2 697.127 43.2H644.527ZM712.927 105.8C714.927 105.8 716.593 105.133 717.927 103.8C719.26 102.467 719.927 100.867 719.927 99C719.927 97 719.26 95.3333 717.927 94C716.593 92.6667 714.927 92 712.927 92H644.527V105.8H712.927Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M774.522 4.20001H929.522V43.2H821.122V55.6H922.722V93H821.122V105.6H929.522V144.6H774.522V4.20001Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M1078.06 4.6L1141.06 144.6H1087.06L1076.46 121H1007.06L996.462 144.6H942.862L1005.66 4.6H1078.06ZM1023.66 80.6H1059.86L1041.66 43.8L1023.66 80.6Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M1105.73 4.20001H1291.13V50.6H1221.73V144.6H1175.33V50.6H1105.73V4.20001Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M1466.42 105.2C1466.42 111.867 1465.69 117.533 1464.22 122.2C1462.89 126.733 1460.42 130.8 1456.82 134.4C1453.35 137.867 1448.42 140.467 1442.02 142.2C1435.62 143.8 1427.69 144.6 1418.22 144.6H1341.82H1302.22V4.20001H1402.22C1411.69 4.20001 1419.69 4.93334 1426.22 6.4C1432.89 7.86668 1438.15 10.2 1442.02 13.4C1446.02 16.4667 1448.89 20.1333 1450.62 24.4C1452.35 28.5333 1453.22 33.5333 1453.22 39.4C1453.22 52.0667 1450.02 61.2 1443.62 66.8C1446.42 67.6 1449.02 68.8667 1451.42 70.6C1453.95 72.2 1456.42 74.4667 1458.82 77.4C1461.22 80.2 1463.09 84 1464.42 88.8C1465.75 93.6 1466.42 99.0667 1466.42 105.2ZM1349.02 43.2V56.6H1401.62C1403.49 56.6 1405.02 55.9333 1406.22 54.6C1407.55 53.2667 1408.22 51.6667 1408.22 49.8C1408.22 47.9333 1407.55 46.4 1406.22 45.2C1405.02 43.8667 1403.49 43.2 1401.62 43.2H1349.02ZM1417.42 105.8C1419.42 105.8 1421.09 105.133 1422.42 103.8C1423.75 102.467 1424.42 100.867 1424.42 99C1424.42 97 1423.75 95.3333 1422.42 94C1421.09 92.6667 1419.42 92 1417.42 92H1349.02V105.8H1417.42Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M1563.97 2C1576.64 2 1587.84 2.73334 1597.57 4.20001C1607.31 5.53334 1616.31 7.86667 1624.57 11.2C1632.84 14.5333 1639.57 18.9333 1644.77 24.4C1650.11 29.7333 1654.24 36.5333 1657.17 44.8C1660.11 52.9333 1661.57 62.5333 1661.57 73.6C1661.57 84.5333 1660.24 94 1657.57 102C1655.04 110 1651.31 116.8 1646.37 122.4C1641.57 127.867 1635.17 132.333 1627.17 135.8C1619.31 139.133 1610.37 141.533 1600.37 143C1590.37 144.467 1578.71 145.2 1565.37 145.2C1532.31 145.2 1508.24 139.2 1493.17 127.2C1478.24 115.067 1470.77 96.3333 1470.77 71C1470.77 47.5333 1478.44 30.2 1493.77 19C1509.11 7.66667 1532.51 2 1563.97 2ZM1565.77 108.4C1579.91 108.4 1590.84 105.533 1598.57 99.8C1606.31 94.0667 1610.17 85.3333 1610.17 73.6C1610.17 62.2667 1606.11 53.6667 1597.97 47.8C1589.84 41.8 1578.91 38.8 1565.17 38.8C1557.97 38.8 1551.64 39.6 1546.17 41.2C1540.71 42.6667 1536.17 44.9333 1532.57 48C1529.11 51.0667 1526.51 54.7333 1524.77 59C1523.04 63.2667 1522.17 68.1333 1522.17 73.6C1522.17 84.1333 1525.84 92.6 1533.17 99C1540.51 105.267 1551.37 108.4 1565.77 108.4Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        <path d="M1844.2 4.20001L1780.4 74.4L1843.6 144.6H1780.8L1744.4 104.8L1707.4 144.6H1644.6L1708.4 74.4L1645.2 4.20001H1708L1744.6 44L1781.4 4.20001H1844.2Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1)"/>
        </svg>

        `;

        // When screen size is lesser then 769px, use the svg_thic, otherwise use svg_thin.
        let svg_logo = (screen.width < 769) ? svg_thic : svg_thin;
        // data-aos="zoom-out" data-aos-delay="500"
        this.innerHTML = `
        <div id="svg-beatbox" data-aos="fade-up">
        
        ${svg_logo}
        
        </div>
        `;
    }
}

customElements.define('svg-landing-component', SvgLanding);

// This generates the animation of the main landing text
const svgBeatbox = document.querySelectorAll("#svg-beatbox path");

for (let i = 0; i < svgBeatbox.length; i++) {
    svgBeatbox[i].style.strokeDasharray = svgBeatbox[i].getTotalLength();
    svgBeatbox[i].style.strokeDashoffset = svgBeatbox[i].getTotalLength();
    // console.log(`Letter ${i} is ${svgBeatbox[i].getTotalLength()}`);
}

