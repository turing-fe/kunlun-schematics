import { useQuery } from 'react-query'
import { axios } from 'src/lib/axios'
import type { ExtractFnReturnType, QueryConfig } from 'src/lib/react-query'
import type { User } from '../types'

export const getUsers = (): Promise<User[]> => {
  return axios.get(`/users`)
}

type QueryFnType = typeof getUsers

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users'],
    queryFn: () => getUsers()
  })
}
