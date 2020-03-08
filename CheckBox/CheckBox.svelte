<script>
    let uninitializedValue = () => {}
    let className = ''
    export { className as class }
    export let disabled = false
    export let indeterminate = uninitializedValue
    export let checked = uninitializedValue
    export let value = null
    let checkbox
    $: if (
        checkbox &&
        indeterminate !== uninitializedValue &&
        checkbox.indeterminate !== indeterminate
    ) {
        checkbox.indeterminate = indeterminate
    }
    $: if (checkbox) {
        if (checked !== uninitializedValue && checkbox.checked !== checked) {
            checkbox.checked = checked
        }
    }
    $: if (checkbox && checkbox.disabled !== disabled) {
        checkbox.disabled = disabled
    }
    $: if (checkbox && checkbox.value !== value) {
        checkbox.value = value
    }
</script>

<style type="text/scss" lang="scss">
    @import './CheckBox.scss';
</style>

<label class="mat-checkbox {className}">
    <input
        type="checkbox"
        bind:this={checkbox}
        {disabled}
        bind:checked
        value="value"
        on:change
        on:input />
    <span>
        <slot />
    </span>
</label>
