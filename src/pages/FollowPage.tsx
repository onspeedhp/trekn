import React from 'react'
import { useNavigate, useParams } from 'react-router';

export default function FollowPage() {
    const navigate = useNavigate();
    const {follower, following, id: userId} = useParams();
    return (
        <div className='w-full h-screen'>
            <div className='m-4 font-semibold flex items-center relative'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                    className='absolute'
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <path
                        d='M9.21347 13.9093L8.51972 14.6031C8.22597 14.8968 7.75097 14.8968 7.46035 14.6031L1.38535 8.5312C1.0916 8.23745 1.0916 7.76245 1.38535 7.47183L7.46035 1.39683C7.7541 1.10308 8.2291 1.10308 8.51972 1.39683L9.21347 2.09058C9.51035 2.38745 9.5041 2.87183 9.20097 3.16245L5.43535 6.74995H14.4166C14.8322 6.74995 15.1666 7.08433 15.1666 7.49995V8.49995C15.1666 8.91558 14.8322 9.24996 14.4166 9.24996H5.43535L9.20097 12.8375C9.50722 13.1281 9.51347 13.6125 9.21347 13.9093Z'
                        fill='black'
                        fillOpacity='0.7'
                    />
                </svg>
            </div>
            <div className="text-xl leading-4">
                Edit Profile
            </div>
        </div>
    )
}
