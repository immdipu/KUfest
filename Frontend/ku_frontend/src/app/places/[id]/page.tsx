import React from 'react'
import Pokhara from '@/components/singleCity/pokhara'
import Lumbini from '@/components/singleCity/lumbini'
import Kathmandu from '@/components/singleCity/kathmandu'
import Gosaikunda from '@/components/singleCity/gosaikunda'
import Lalitpur from '@/components/singleCity/lalitpur'
import Nagarkot from '@/components/singleCity/nagarkot'
import Chitwan from '@/components/singleCity/chitwan'
import Mustang from '@/components/singleCity/mustang'
import Dharan from '@/components/singleCity/dharan'

const page = ({ params }: any) => {
    console.log(params.id)
    return (
        <><div>
            <Pokhara />

        </div><div>
                <Lumbini />
            </div>
            <div>
                <Kathmandu />
            </div>
            <div>
                <Gosaikunda />
            </div>
            <div>

                <Lalitpur />
            </div>
            <div>
                <Nagarkot />
            </div>
            <div>
                <Chitwan />
            </div>
            <div>
                <Mustang />
            </div>
            <div>
                <Dharan />
            </div>

        </>
    )
}

export default page