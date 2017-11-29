var FormView = Backbone.View.extend({
    el:"#container",
    form_template:_.template(   "Enter text <input  class='person-input'>  "),
    initialize:function () {
        this.$el.html(this.form_template());
    },
    events:{
        'keyup .person-input':'editText',
        'keydown .person-input':'editText',

    },
    editText:function (e) {
        if (((e.which === 8 || e.which === 46) && e.type === 'keydown') || (e.type === 'keyup')) {

            this.model.set('text', this.$el.find(".person-input").val().trim());
            console.log( this.model.get('text'));
        }
    },
    render:function () {
        return this;
    }
});


