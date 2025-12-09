import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    // get user's role from the db
    const { data: userData, isLoading: isRoleLoading } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['rolePremium', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/user/role`)
            return result.data.role;
        }
    })
    return { userData, isRoleLoading }
};

export default useRole;