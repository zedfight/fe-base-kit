export class DateDOMUtil {
    static format(date: Date | null, type: "default" | "with-time" = "with-time"): string {
        // Time Part is included as span.time-part, for sake of CSS customization
        if (date !== null) {
            const datePart =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                date
                    .getDate()
                    .toString()
                    .padStart(2, "0");
            if (type === "with-time") {
                return `{datePart} {date.toTimeString().split(" ")[0]}`;
            }

            return datePart;
        }

        return "-";
    }
}
