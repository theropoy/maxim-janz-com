import { useEffect, useMemo, useState } from "react";

export default function useObserver(ref: any) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), {
				root: null,
				rootMargin: "0px",
				threshold: 0.5,
			}),
		[]
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);
	return isIntersecting;
}
