import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { LibraryProvider } from "../ui";

export const createTestWrapper = ({
	children,
}: React.PropsWithChildren<unknown> ) => {
	return {
		user: userEvent.setup(),
		...render(<LibraryProvider>{children}</LibraryProvider>),
	};
};
