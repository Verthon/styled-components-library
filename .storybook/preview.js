import { useGlobals } from "@storybook/client-api";

import LibraryProvider from "../src/providers/LibraryProvider/LibraryProvider"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => {
		const [{ locale }] = useGlobals();

		return (
			<LibraryProvider>
				<Story />
			</LibraryProvider>
		);
	},
];
