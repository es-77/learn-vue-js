
const hasPermission = {
    mounted: (ele, binding) => {

        const { value } = binding
        const permissionCheck = value[0];
        const allPermission = value[1];
        const permission = "user.list,user.create,user.update,user.delete";
        console.log(ele, binding, "element,bindling", permissionCheck,
            allPermission)
        if (!permission.includes(binding.value)) {
            ele.parentNode.removeChild(ele)
        }
    }
}
export { hasPermission };