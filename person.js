$(document).ready( function () {

    var PersonModel = Backbone.Model.extend({
        defaults: {
            name: "Unknown User",
            age: 99,
            occupation: 'programmer'
        }
    });

    var PersonView = Backbone.View.extend({
        //define the location of contents
        el:"#container",
        // tagName: 'li',
        // <%= varname %> for attach var to template
        my_template:_.template("<strong><%=name %> </strong> <%=age %> <%= occupation%>"),
        initialize: function () {
            this.render();
        },
        render: function () {

            //Replace element's html (li)
            // this.$el.html(this.model.get('name') + "(" + this.model.get('age') + ") " + this.model.get('occupation'));
            //Use template
            this.$el.html(this.my_template(this.model.toJSON()));
        }
    });
    var personModel = new PersonModel();
    var personView = new PersonView({model:personModel});
    personView.initialize();
});