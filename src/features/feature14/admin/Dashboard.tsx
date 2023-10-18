import React, { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery, Input } from '@chakra-ui/react';
import Chart from 'chart.js/auto';
// import SortingBlade from '../components/SortingBlade'; // Update the path
// import FilteringBlade from '../components/FilteringBlade'; // Update the path

const buttonWidthPercentage = '90%'; // ปรับขนาดให้เหมาะสมกับ iPhone 15
const chartWidthPercentage = '30%'; // ปรับขนาดให้เหมาะสมกับ iPhone 15
const cutoutPercentage = 25; // ปรับค่า cutout percentage ให้เหมาะสมกับ iPhone 15
const chartMarginPercentage = '15%'; // ปรับ margin ระหว่าง charts ให้เหมาะสมกับ iPhone 15

const bulletStyle = {
  listStyle: 'none',
};

const Dashboard: React.FC = () => {
  const [isSmallerScreen] = useMediaQuery('(max-width: 767px)');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [showLoyalCustomers, setShowLoyalCustomers] = useState<boolean>(true);
  const [showNormalCustomers, setShowNormalCustomers] = useState<boolean>(true);

  const baseFontSize = isSmallerScreen ? 16 : 10;
  const fontSize = `calc(${buttonWidthPercentage} / ${baseFontSize})`;

  useEffect(() => {
    let customersChart: Chart;
    let businessesChart: Chart;

    const customersChartCanvas = document.getElementById('customersChart') as HTMLCanvasElement;
    const businessesChartCanvas = document.getElementById('businessesChart') as HTMLCanvasElement;

    if (customersChartCanvas && businessesChartCanvas) {
      const buttonWidth = businessesChartCanvas.offsetWidth;

      customersChart = new Chart(customersChartCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Loyal Customers', 'Normal Customers'],
          datasets: [
            {
              data: [70, 30],
              backgroundColor: ['#5F0DBB', '#D9D9D9'],
            },
          ],
        },
        options: {
          cutout: cutoutPercentage,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      businessesChart = new Chart(businessesChartCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Restaurant', 'Bar', 'Club'],
          datasets: [
            {
              data: [50, 30, 20],
              backgroundColor: ['#5F0DBB', '#763FAF', '#D9D9D9'],
            },
          ],
        },
        options: {
          cutout: cutoutPercentage,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      customersChart?.destroy();
      businessesChart?.destroy();
    };
  }, [isSmallerScreen]);

  return (
    <Box
      backgroundColor="#200944"
      padding="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <Box
        width={buttonWidthPercentage}
        display="flex"
        justifyContent="space-between"
        mb="10px"
      >
        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Business
        </Button>

        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Customer
        </Button>

        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Reservation
        </Button>
      </Box>

      <Box
        color="#D9D9D9"
        mb="20px"
        alignSelf="flex-start"
        fontSize={fontSize}
        marginLeft={isSmallerScreen ? '14%' : '0'}  // ปรับ marginLeft เพื่อให้ "Total Business" ตรงกับ "Business"
      >
        Total Business - 245
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        width={buttonWidthPercentage}
        mb="20px"
      >
        <Box
          textAlign="left"
          width={chartWidthPercentage}
          marginRight={chartMarginPercentage}
        >
          <canvas id="customersChart" width={chartWidthPercentage} height={chartWidthPercentage}></canvas>
          <span style={{ backgroundColor: '#5F0DBB', borderRadius: '50%', display: 'inline-block', width: '6px', height: '6px', marginTop: '5px', marginRight: '8px' }}></span>
          <span style={{ fontSize: isSmallerScreen ? '10px' : '12px', lineHeight: '1', verticalAlign: 'middle', marginLeft: '2px' }}>Loyal Customers - 70%</span>
          <br />
          <span style={{ backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'inline-block', width: '6px', height: '6px', marginTop: '4px', marginRight: '8px' }}></span>
          <span style={{ fontSize: isSmallerScreen ? '10px' : '12px', lineHeight: '1', verticalAlign: 'middle', marginLeft: '2px' }}>Normal Customers - 30%</span>
        </Box>
        <Box
          textAlign="left"
          width={chartWidthPercentage}
        >
          <canvas id="businessesChart" width={chartWidthPercentage} height={chartWidthPercentage}></canvas>
          <span style={{ backgroundColor: '#5F0DBB', borderRadius: '50%', display: 'inline-block', width: '6px', height: '6px', marginTop: '5px', marginRight: '8px' }}></span>
          <span style={{ fontSize: isSmallerScreen ? '8px' : '10px', lineHeight: '1', verticalAlign: 'middle', marginLeft: '2px' }}>Restaurant - 50%</span>
          <br />
          <span style={{ backgroundColor: '#763FAF', borderRadius: '50%', display: 'inline-block', width: '6px', height: '6px', marginTop: '4px', marginRight: '8px' }}></span>
          <span style={{ fontSize: isSmallerScreen ? '8px' : '10px', lineHeight: '1', verticalAlign: 'middle', marginLeft: '2px' }}>Bar - 30%</span>
          <br />
          <span style={{ backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'inline-block', width: '6px', height: '6px', marginTop: '4px', marginRight: '8px' }}></span>
          <span style={{ fontSize: isSmallerScreen ? '8px' : '10px', lineHeight: '1', verticalAlign: 'middle', marginLeft: '2px' }}>Club - 20%</span>
        </Box>
      </Box>

      {/* Flex container for Search Bar, Sorting, and Filtering */}
      <Box
        width={buttonWidthPercentage}
        mb="20px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Search Bar with white background */}
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          marginRight="10px"
          style={{ backgroundColor: 'white', color: 'black' }} // Styles for white background
        />

        {/* Flex container for Sorting and Filtering links */}
        <Box display="flex" alignItems="center">
          {/* Ellipse for Sorting */}
          <span
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'inline-block',
              width: '10px',
              height: '10px',
              marginRight: '5px',
            }}
          ></span>

          {/* Text link for Sorting */}
          <span
            style={{
              cursor: 'pointer',
              color: 'white',
              marginRight: '20px',
              fontSize: '10px',
            }}
            onClick={() => {
              // Navigate to the sorting blade
              console.log('Navigate to Sorting Blade');
            }}
          >
            Sorting
          </span>

          {/* Ellipse for Filtering */}
          <span
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'inline-block',
              width: '10px',
              height: '10px',
              marginRight: '5px',
            }}
          ></span>

          {/* Text link for Filtering */}
          <span
            style={{
              cursor: 'pointer',
              color: 'white',
              fontSize: '10px',
            }}
            onClick={() => {
              // Navigate to the filtering blade
              console.log('Navigate to Filtering Blade');
            }}
          >
            Filtering
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;