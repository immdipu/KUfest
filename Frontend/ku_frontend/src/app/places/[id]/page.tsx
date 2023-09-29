import React from 'react'
import SingleCity from '@/components/singleCity/SingleCity'

const page = ({ params }: any) => {
    console.log(params.id)
    return (
        <div>
            <SingleCity />
        </div>
    )
}

export default page