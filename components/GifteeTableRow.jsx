export default function GifteeTableRow({ giftee }) {
	return (
		<tr key={giftee.email}>
			<td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0'>
				{giftee.name}
				<dl className='font-normal lg:hidden'>
					<dt className='sr-only'>Title</dt>
					<dd className='mt-1 truncate text-gray-700'>{giftee.title}</dd>
					<dt className='sr-only sm:hidden'>Email</dt>
					<dd className='mt-1 truncate text-gray-500 sm:hidden'>{giftee.email}</dd>
				</dl>
			</td>
			<td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>{giftee.title}</td>
			<td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>{giftee.email}</td>
			<td className='px-3 py-4 text-sm text-gray-500'>{giftee.role}</td>
			<td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
				<a href='#' className='text-indigo-600 hover:text-indigo-900'>
					Edit<span className='sr-only'>, {giftee.name}</span>
				</a>
			</td>
		</tr>
	);
}
