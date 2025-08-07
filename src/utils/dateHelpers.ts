export function formatDateDisplay(isoDate: string): string {
	return new Date(isoDate).toLocaleDateString(undefined, {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export function getNextDate(isoDate: string): string {
	const d = new Date(isoDate);
	d.setDate(d.getDate() + 1);
	return d.toISOString().split("T")[0];
}

export function getPrevDate(isoDate: string): string {
	const d = new Date(isoDate);
	d.setDate(d.getDate() - 1);
	return d.toISOString().split("T")[0];
}
