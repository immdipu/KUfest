import React from 'react'
import Pokhara from '@/components/singleCity/pokhara'
import Lumbini from '@/components/singleCity/lumbini'
import Kathmandu from '@/components/singleCity/kathmandu'

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
            </div></>
    )
}

export default page