// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editCommand, getCustomTeamCommands} from 'mattermost-redux/actions/integrations';
import {getCommands} from 'mattermost-redux/selectors/entities/integrations';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import EditCommand from './edit_command.jsx';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);
    const commandId = (new URLSearchParams(ownProps.location.search)).get('id');
    const enableCommands = config.EnableCommands === 'true';

    return {
        commandId,
        commands: getCommands(state),
        enableCommands,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getCustomTeamCommands,
            editCommand,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommand);
