<template>
    <div class="tabulated-data" v-bind:class="{'dark-mode': darkMode}">
        <div class="form-group tab-data-search">
            <input type="text" class="form-control" v-model="search" placeholder="Search"
                   :disabled="loading && filteredList.length === 0">
        </div>
        <table class="table table-striped table-responsive-sm" style="  width:100%">
            <thead>
            <tr>
                <th scope="col" v-for="(column, columnIndex) in columns" @click="sort(column.field)" :key="columnIndex">
                    {{column.label}}
                </th>
                <th v-if="actions.length > 0"></th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(item, index) in (sortedActivity, filteredList)"
                v-bind:key="index">
                <td v-for="(col, colIndex) in columns" :key="colIndex" v-html="itemValue(item, col.field)">
                    {{itemValue(item, col.field)}}
                </td>
                <!--v-if="dontShowKey === action && dontShowValue === action.dontShowKey"-->
                <td v-if="actions.length > 0">
                        <span v-for="(action, actionIndex) in actions" :key="actionIndex">
                            <button v-if="typeof action.showKey === 'undefined' || action.showKey.length === 0 || action.showWhen.indexOf(item[action.showKey]) !== -1"
                                    :title="action.title || ''"
                                    :class="action.class" class="btn-sm1" v-bind="$attrs"
                                    @click="handleCallback(action.callback, filterObject(item, action.args))">
                                {{ action.text }}
                            </button>
                        </span>
                </td>
            </tr>
            <tr v-if="filteredList.length === 0">
                <td v-if='search.length > 0' colspan="100" style='text-align: center'>
                    Nothing was found for {{search}}
                </td>
            </tr>
            <tr v-if="loading">
                <td style='text-align: center' colspan="100">
                    <spinner :theme="theme === 'light' ? 'dark' : 'light'"></spinner>
                </td>
            </tr>
            <tr v-else-if="!loading && data.length === 0">
                <td style='text-align: center' colspan="100"><span>No data yet!</span></td>
            </tr>
            </tbody>
        </table>


        <div v-if="filteredList.length > 0">
            <div class="float-left pagenumber" v-if='data.length > 0'>Page: {{ currentPage }} of {{totalPages}}</div>
            <div class="float-right">
                <button @click="prevPage" class="btn btn-info btn-sm" v-bind:class="disable"><i
                        class="fas fa-arrow-left"></i> Previous
                </button> &nbsp; &nbsp; &nbsp;
                <button @click="nextPage" class="btn btn-info btn-sm1 " v-bind:class="{disable: (totalPages === 1)}">Next <i
                        class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    import Spinner from './Spinner';

    export default {
        name: "TabulatedData",
        components: {Spinner},
        props: {
            sortBy: {
                type: String,
                default: 'default'
            },
            sortDir: {
                type: String,
                default: 'default'
            },
            showPerPage: {
                type: Number,
                default: 12
            },
            columns: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            data: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            actions: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            loading: {
                type: Boolean,
                default: true
            },
            type: {
                type: String, // striped | hover
                default: 'striped'
            },
            darkMode: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            currentSort: 'default',
            currentSortDir: 'default',
            search: '',
            searchSelection: '',
            currentPage: 1,
            disable: '',
            disableNext: '',
        }),
        methods: {
            filterObject(haystack, needle = []) {
                // console.log(haystack);
                let data = [];
                if (needle.length === 0 || haystack.length == 0) return [];
                needle.forEach((key) => {
                    if (haystack.hasOwnProperty(key))
                        data.push(haystack[key]);
                });
                return data;
            },
            handleCallback(callback, argument) {
                if (!callback) return;
                this.$emit(callback, ...argument);
            },
            sort: function (s) {
                if (s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
                }
                this.currentSort = s;
            },
            nextPage: function () {
                if ((this.currentPage * this.showPerPage) < this.data.length) this.currentPage++;
            },
            prevPage: function () {
                if (this.currentPage > 1) this.currentPage--;
            },
            hasValue(item, column) {
                return item[column.toLowerCase()] !== 'undefined'
            },
            itemValue(item, column) {
                return item[column]
            }
        },
        computed: {
            sortedActivity: function () {
                return this.data.sort((a, b) => {
                    // Set the sorting to the first column of header
                    // Order by desc
                    this.currentSort = (this.columns.length > 0 && this.currentSort === 'default') ? this.columns[0] : this.currentSort;
                    let modifier = 1;
                    if (this.currentSortDir === 'desc') modifier = -1;
                    if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                    return 0;
                }).filter((row, index) => {
                    let start = (this.currentPage - 1) * this.showPerPage;
                    let end = this.currentPage * this.showPerPage;
                    if (index >= start && index < end) return true;
                });
            },
            filteredList() {
                return this.data.filter((val) => {
                    if (this.search.length === 0) return true;

                    var match = false;
                    let keys = Object.keys(val);
                    for (var i = 0; i < keys.length; i++) {
                        var current = val[keys[i]] || '';
                        match = current.toString().toUpperCase().match(this.search.toString().toUpperCase());
                        if (match) break;
                    }
                    return match;
                }).filter((row, index) => {
                    let start = (this.currentPage - 1) * this.showPerPage;
                    let end = this.currentPage * this.showPerPage;
                    if (index >= start && index < end) return true;
                });
            },
            totalPages() {
                return Math.ceil(this.data.length / this.showPerPage);
            }
        },
        created() {
            // Init the Sort By
            this.currentSort = this.sortBy;
            this.currentSortDir = this.sortDir;

            if (this.currentPage === 1)
                this.disable = 'disabled';

            if ((this.currentPage * this.showPerPage) < this.data.length) this.disableNext = 'disabled';
        }
    }
</script>

<style scoped>
    @import "../assets/tabulated_data.css";
</style>