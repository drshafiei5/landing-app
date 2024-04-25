import Image from 'next/image'
import React from 'react'

import { useAuth } from '@/src/contexts/auth-context';

const ProfileCard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="card">
            <div className="card-body text-center">
                <div className="mt-3 mb-4">
                    <Image
                        alt={""}
                        src="https://picsum.photos/seed/picsum/250"
                        className="rounded-circle img-fluid"
                        width={250}
                        height={250}
                    />
                </div>
                <h4 className="mb-2">{user?.name}</h4>
                <p className="text-muted mb-4">
                    {user?.email}{" "}
                    <span className="mx-2">|</span>{" "}
                    <a href="#!">rogrammer.com</a>
                </p>

                <button
                    type="button"
                    onClick={logout}
                    className="button button--primary"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileCard