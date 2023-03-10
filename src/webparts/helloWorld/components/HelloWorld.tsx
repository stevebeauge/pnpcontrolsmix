import { BaseComponentContext } from '@microsoft/sp-component-base';
import { TaxonomyPicker } from '@pnp/spfx-controls-react';
import { Stack } from 'office-ui-fabric-react';
import * as React from 'react';

type HelloWorldProps = {
  context: BaseComponentContext,
}

const HelloWorld: React.FC<HelloWorldProps> = ({ context  }) => {
  return (<Stack>
    <h1>Hello {context.pageContext.user.displayName}</h1>

    <TaxonomyPicker context={context} label={''} panelTitle={''} termsetNameOrID={'8dbf96f0-bf0d-4275-802e-3a93d91b07bd'}  />
  </Stack>
  );
}

export { HelloWorld };
