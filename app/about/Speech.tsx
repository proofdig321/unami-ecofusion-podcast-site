'use client'

import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Image from 'next/image'

const Speech = () => {
  return (
    <div className='py-16 bg-white'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='w-full md:w-1/2'>
                    <Heading title='Title: "Pathways to Progress: SDG-Driven Growth of Unami Ecofusion Podcast Blog"

                        'color='text-black' />
                    <br />
                    <p>
                    We are thrilled to share our journey towards a more sustainable and conscious world through the Unami Ecofusion Podcast Blog. Our passion for environmental sustainability, eco-conscious travel, and all things green has driven us to create a platform that not only educates but also inspires change.
                    </p>
                    <br />
                    <p>
                    At Unami Ecofusion, we believe in the power of knowledge and the potential for change that lies within each of us. Our mission is to amplify the voices advocating for a better world, highlighting the United Nations Sustainable Development Goals (SDGs) as our guiding light. These goals are not just aspirations but a blueprint for a world where people, planet, and prosperity coexist harmoniously.
                    </p>
                    <br />
                    <p>
                    By integrating these new features, we aspire to foster a vibrant community of change-makers, providing a platform for dialogue, sharing of ideas, and collective action towards achieving the SDGs. The Unami Ecofusion Podcast Blog will serve as a hub for inspiration, knowledge-sharing, and a call to action, as we tackle pressing sustainability challenges together.
                    </p>
                    <br />
                    <p>
                    But we can't embark on this journey alone. We need your support to make this vision a reality. Your contribution will directly fuel the growth of our platform, enabling us to reach more people, spread awareness about the SDGs, and inspire positive change in the world.  
                    </p>
                    <br />
                    <p>
                    Together, let's carve out pathways to progress, championing the SDGs and paving the way for a sustainable and prosperous future. Every step we take on this journey is a step towards a better world - a world where sustainability isn't just a goal, but a way of life.
                    </p>
                    <br />
                    <p>
                    Thank you for being a part of our eco-driven community, and for supporting us on this exciting venture. Your support means the world to us, and together, we can create a lasting impact.
                    Onward towards a sustainable tomorrow!
                    </p>
                    <p>
                    With gratitude,
                    Bhekithemba Simelane
                    </p>
                </div>

                <div className='w-full md:w-1/2'>
                    <Image src='https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        width={500} height={500}
                        className='w-full md:rounded-full'
                        alt='speech' />
                </div>

            </div>

        </Container>
    </div>
  )
}

export default Speech