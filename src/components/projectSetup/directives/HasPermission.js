import { getUser } from "../common/LocalStoreage";
const hasPermission = {
    mounted: (ele, binding) => {
        const permission = getUser()?.rolePermission?.permissions?.toString();
        if (!permission?.includes(binding.value)) {
            ele?.parentNode?.removeChild(ele)
        }
    }
}
export { hasPermission };