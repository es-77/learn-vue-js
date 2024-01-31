const hasPermission = {
    mounted: (ele, binding) => {
        const permission = "user.list,user.create,user.update,user.delete";
        console.log(ele, binding, "element,bindling")
        if (!permission.includes(binding.value)) {
            ele.parentNode.removeChild(ele)
        }
    }
}
export { hasPermission };