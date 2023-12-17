import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

interface RestaurantCardProps {
  name: string;
  businessType: string;
  monthlyRevenue: number;
  commission: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    name,
    businessType,
    monthlyRevenue,
    commission,
  }) => {
    return (
        <Link to={`/restaurants/${name}`}>
            <Box
            backgroundColor="#200944"
            color="white"
            padding="20px"
            margin="10px 0"
            borderRadius="8px"
            border="1px solid #763FAF"
            display="flex"
            alignItems="center"
            >
                <img
                    src="url_to_your_image"
                    alt="Restaurant Image"
                    style={{ width: '100px', height: '100px', marginRight: '20px' }}
                />

                <div>
                    <h2>{name}</h2>
                    <p style={{ fontSize: '14px', marginBottom: '5px' }}>{`Business - ${businessType}`}</p>
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>{`Monthly revenue - ${monthlyRevenue} Baht`}</p>
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>{`Commission (10%) - ${commission} Baht`}</p>
                </div>

                <Link to={`/setup/${name}`}>
                    <FaAngleRight style={{ marginLeft: 'auto' }} />
                </Link>
            </Box>
        </Link>
    );
};

export default RestaurantCard;