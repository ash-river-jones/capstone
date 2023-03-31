const stats = [
	{ name: 'Total Gifts Purchased', stat: '71,897' },
	{ name: 'Avg. Price per Gift', stat: '$ 37.16' },
	{ name: 'Avg. Cost per Person', stat: '$ 75.34' },
];

export default function DashbaordStats() {
	return (
		<>
			<h3 className='text-base font-semibold leading-6 text-gray-900'>Last 30 days</h3>
			<div className='mt-5 flex flex-col gap-5'>
				{stats.map((item) => (
					<div key={item.name} className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>
						<p className='truncate text-sm font-medium text-gray-500'>{item.name}</p>
						<p className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>{item.stat}</p>
					</div>
				))}
			</div>
		</>
	);
}
