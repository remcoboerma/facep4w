(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-9327e1a4"], {
        1096: function(t, n, a) {
            "use strict";
            var s = a("e278"),
                e = a.n(s);
            e.a
        },
        "2b90": function(t, n, a) {
            "use strict";
            var s = a("f08f"),
                e = a.n(s);
            e.a
        },
        b23f: function(t, n, a) {
            "use strict";
            a.r(n);
            var s = function() {
                    var t = this,
                        n = t.$createElement,
                        a = t._self._c || n;
                    return a("div", {
                        staticClass: "components-container board"
                    }, [a("Kanban", {
                        key: 1,
                        staticClass: "kanban todo",
                        attrs: {
                            list: t.list1,
                            group: t.group,
                            "header-text": "Todo"
                        }
                    }), a("Kanban", {
                        key: 2,
                        staticClass: "kanban working",
                        attrs: {
                            list: t.list2,
                            group: t.group,
                            "header-text": "Working"
                        }
                    }), a("Kanban", {
                        key: 3,
                        staticClass: "kanban done",
                        attrs: {
                            list: t.list3,
                            group: t.group,
                            "header-text": "Done"
                        }
                    })], 1)
                },
                e = [],
                i = function() {
                    var t = this,
                        n = t.$createElement,
                        a = t._self._c || n;
                    return a("div", {
                        staticClass: "board-column"
                    }, [a("div", {
                        staticClass: "board-column-header"
                    }, [t._v(" " + t._s(t.headerText) + " ")]), a("draggable", t._b({
                        staticClass: "board-column-content",
                        attrs: {
                            list: t.list,
                            "set-data": t.setData
                        }
                    }, "draggable", t.$attrs, !1), t._l(t.list, (function(n) {
                        return a("div", {
                            key: n.id,
                            staticClass: "board-item"
                        }, [t._v(" " + t._s(n.name) + " " + t._s(n.id) + " ")])
                    })), 0)], 1)
                },
                o = [],
                r = a("1980"),
                l = a.n(r),
                d = {
                    name: "DragKanbanDemo",
                    components: {
                        draggable: l.a
                    },
                    props: {
                        headerText: {
                            type: String,
                            default: "Header"
                        },
                        options: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        list: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    methods: {
                        setData: function(t) {
                            t.setData("Text", "")
                        }
                    }
                },
                u = d,
                c = (a("1096"), a("2877")),
                b = Object(c["a"])(u, i, o, !1, null, "083991bb", null),
                m = b.exports,
                f = {
                    name: "DragKanbanDemo",
                    components: {
                        Kanban: m
                    },
                    data: function() {
                        return {
                            group: "mission",
                            list1: [{
                                name: "Mission",
                                id: 1
                            }, {
                                name: "Mission",
                                id: 2
                            }, {
                                name: "Mission",
                                id: 3
                            }, {
                                name: "Mission",
                                id: 4
                            }],
                            list2: [{
                                name: "Mission",
                                id: 5
                            }, {
                                name: "Mission",
                                id: 6
                            }, {
                                name: "Mission",
                                id: 7
                            }],
                            list3: [{
                                name: "Mission",
                                id: 8
                            }, {
                                name: "Mission",
                                id: 9
                            }, {
                                name: "Mission",
                                id: 10
                            }]
                        }
                    }
                },
                p = f,
                g = (a("2b90"), Object(c["a"])(p, s, e, !1, null, null, null));
            n["default"] = g.exports
        },
        e278: function(t, n, a) {},
        f08f: function(t, n, a) {}
    }
]);