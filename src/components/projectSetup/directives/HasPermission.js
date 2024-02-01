import { inject } from 'vue';

const hasPermission = {
    mounted: (ele, binding) => {
        // const permissionStore = app.usePermissionStore();
        const permissionStore = inject('permissionStore'); // Inject the store

        // Get the user permissions from the store
        // const userPermissions = permissionStore.userPermissions;
        console.log(permissionStore)
        const permission = "user.list,user.create,user.update,user.delete";
        console.log(ele, binding, "element,bindling")
        if (!permission.includes(binding.value)) {
            ele.parentNode.removeChild(ele)
        }
    }
}
export { hasPermission };