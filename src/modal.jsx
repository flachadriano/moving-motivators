module.exports = React.createClass({

    propTypes: {
        title: React.PropTypes.string,
        imageUrl: React.PropTypes.string,
        description: React.PropTypes.string,
     },

    render() {
        return (
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">{this.props.title}</h4>
                  </div>
                  <div className="modal-body">
                      <img src={ 'cardempty/' + this.props.imageUrl} className="img-responsive"/>
                      <p>{this.props.description}</p>
                  </div>
                </div>
              </div>
            </div>
        );
    },
});
