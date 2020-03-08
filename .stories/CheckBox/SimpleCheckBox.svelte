<script>
    import { CheckBox } from 'svelte-admin'
    let isChecked = false
</script>

<style>
    .check-box-sample {
        margin: 15px;
    }
</style>

<div class="check-box-sample">
    <CheckBox bind:checked={isChecked}>Simple</CheckBox>
    <br />
    <i>Simple value :</i>
    {isChecked}
</div>

<div class="check-box-sample">
    <CheckBox indeterminate>Indeterminate</CheckBox>
</div>

<div class="check-box-sample">
    <CheckBox disabled>Disabled</CheckBox>
</div>
