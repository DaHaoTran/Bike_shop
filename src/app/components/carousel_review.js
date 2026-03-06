"use client"
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


export default function CarouselReview() {
    return (
        <UncontrolledCarousel
            items={[
                {
                    key: 1,
                    src: 'https://picsum.photos/id/563/2200/800'
                },
            ]}
        />
    )
}
