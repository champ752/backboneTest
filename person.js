var PersonModel = Backbone.Model.extend({
        defaults: {
            name: "Unknown User",
            age: 99,
            occupation: 'programmer',
            text:''
        }
});

var PersonView = Backbone.View.extend({
    //define the location of contents
     el:"#container",
     // tagName: 'li',
    // <%= varname %> for attach var to template

    my_template:_.template("<strong><%=name %> </strong> <%=age %> <%= occupation%> <br> text: <%= text%>"),

    initialize: function (options) {
        this.options = options || {};
        this.listenTo(this.model, 'change', this.render);
        // this.$el.html(this.form_template());
        this.$el.append("<div id='model'></div>");
    },
    render: function () {
        //Replace element's html (li)
        //Use template
        this.$("#model").html(this.my_template(this.model.toJSON()));
        return this;
    }
});
