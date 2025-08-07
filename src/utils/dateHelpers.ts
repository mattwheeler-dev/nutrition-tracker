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

export function getLoggedDates(logs: Record<string, any>): string[] {
	return Object.keys(logs).sort(
		(a, b) => new Date(b).getTime() - new Date(a).getTime()
	);
}

export function getLastNDates(n: number): string[] {
	const dates = [];
	const today = new Date();
	for (let i = 0; i < n; i++) {
		const d = new Date(today);
		d.setDate(today.getDate() - i);
		dates.push(d.toISOString().split("T")[0]);
	}
	return dates;
}
